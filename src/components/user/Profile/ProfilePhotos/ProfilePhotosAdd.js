import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Header,
  Button,
  Label,
  Dropdown,
  Image,
  Icon
} from "semantic-ui-react";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";
// import { toastr } from "react-redux-toastr";
import { withRouter } from "react-router-dom";

import "cropperjs/dist/cropper.css";
import LoadingComponent from "../../../../layout/LoadingComponent";
import { closeModal } from "../../../modals/modalActions";
import { addProfilePhoto } from "../profileActions";

class ProfilePhotos extends Component {
  state = {
    files: [],
    fileName: "",
    cropResult: null,
    image: {},
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: null,
    width: 800,
    height: 800,
    visibility: "visible",
    disableClick: false
  };

  setProfilePicture = async () => {
    const { addProfilePhoto } = this.props;
    // console.log("Files", this.state.files);
    // console.log("Image", this.state.image);
    // console.log("Crop Result", this.state.cropResult);
    // this.cropImage();

    await addProfilePhoto(this.state.image);
    this.props.closeModal();
    this.props.history.push("/profile");
  };
  //   handlePhotoDelete = photo => async () => {
  //     try {
  //       this.props.deletePhoto(photo);
  //     } catch (error) {
  //       toastr.error("Oops", error.message);
  //     }
  //   };

  cancelCrop = () => {
    this.setState({
      files: [],
      image: {},
      visibility: "visibile",
      disableClick: false
    });
  };
  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };
  handlePositionChange = position => {
    this.setState({ position });
  };
  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  cropImage = () => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const canvas = this.editor.getImageScaledToCanvas();

    canvas.toBlob(blob => {
      let imageUrl = URL.createObjectURL(blob);
      this.setState({
        cropResult: imageUrl,
        image: blob
      });
    }, "image/jpeg");
  };

  onDrop = files => {
    this.setState({
      files,
      fileName: files[0].name,
      visibility: "hidden",
      disableClick: true
    });
  };
  render() {
    const { fileImages } = this.props;
    if (fileImages === undefined) {
      <LoadingComponent />;
    }
    return (
      <Segment>
        <Dropzone
          style={{
            textAlign: "center"
          }}
          disableClick={this.state.disableClick}
          onDrop={this.onDrop}
          multiple={false}
        >
          {!this.state.files[0] ? (
            <Image
            //   style={{
            //     paddingTop: "30px",
            //     visibility: this.state.visibility,
            //     textAlign: "center"
            //   }}
            >
              <Icon name="upload" size="huge" />
              <Header content="Drop image here or click to add" />
            </Image>
          ) : (
            <div>
              <Label
                as="a"
                corner="right"
                icon="close"
                color="red"
                onClick={this.cancelCrop}
              />
              <ReactAvatarEditor
                style={{
                  width: "100%",
                  height: "65vh"
                }}
                onImageReady={this.cropImage}
                onMouseMove={this.cropImage}
                ref={this.setEditorRef}
                scale={parseFloat(this.state.scale)}
                width={this.state.width}
                height={this.state.height}
                position={this.state.position}
                onPositionChange={this.handlePositionChange}
                rotate={parseFloat(this.state.rotate)}
                borderRadius={
                  this.state.width / (100 / this.state.borderRadius)
                }
                image={this.state.files[0].preview}
                className="editor-canvas"
              />
              <input
                name="scale"
                type="range"
                onChange={this.handleScale}
                min={this.state.allowZoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
              />
            </div>
          )}
        </Dropzone>
        <Button onClick={this.setProfilePicture} positive>
          Add Profile Picture
        </Button>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    fileImages: state.auth.images
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { closeModal, addProfilePhoto }
  )(ProfilePhotos)
);
