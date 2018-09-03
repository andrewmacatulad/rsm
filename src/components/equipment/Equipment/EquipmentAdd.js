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
import LoadingComponent from "../../../layout/LoadingComponent";
import { submitBlog, setProfilePicture } from "../../../auth/authActions";
import { addEquipPhoto } from "../equipmentAction";
import { openModal, closeModal } from "../../modals/modalActions";

const equipmentType = [
  { text: "Face", value: "face" },
  { text: "Body", value: "body" },
  { text: "Left Hand", value: "leftHand" },
  { text: "Right Hand", value: "rightHand" },
  { text: "Shoes", value: "shoes" },
  { text: "Slippers", value: "slippers" }
];

class PhotosPage extends Component {
  state = {
    files: [],
    fileName: "",
    type: "body",
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

  changeType = (e, { value }) => {
    this.setState({ type: value });
    console.log(value);
  };
  addEquip = async () => {
    const { addEquipPhoto } = this.props;
    // console.log("Files", this.state.files);
    // console.log("Image", this.state.image);
    // console.log("Crop Result", this.state.cropResult);
    // this.cropImage();

    await addEquipPhoto(this.state.image, this.state.type);
    this.props.closeModal();
    this.props.history.push("/equipment");
  };
  //   handlePhotoDelete = photo => async () => {
  //     try {
  //       this.props.deletePhoto(photo);
  //     } catch (error) {
  //       toastr.error("Oops", error.message);
  //     }
  //   };

  setPicture = photo => {
    console.log(photo);
    this.props.setProfilePicture(photo);
  };
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
    console.log(img);
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
    const { fileImages, openModal } = this.props;
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

              {/* <Button onClick={this.cropImage}>Preview</Button> */}
              <Button onClick={() => openModal("EquipmentAddModal")}>
                Open Modal
              </Button>
            </div>
          )}
        </Dropzone>
        Type of Equipment{" "}
        <Dropdown
          onChange={this.changeType}
          value={this.state.type}
          inline
          options={equipmentType}
        />
        <Button onClick={this.addEquip} positive>
          Add Equipment
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
    { submitBlog, openModal, closeModal, setProfilePicture, addEquipPhoto }
  )(PhotosPage)
);
