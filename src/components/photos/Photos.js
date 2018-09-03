import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
  Card,
  Dropdown,
  Icon
} from "semantic-ui-react";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import ReactAvatarEditor from "react-avatar-editor";
// import { toastr } from "react-redux-toastr";

import "cropperjs/dist/cropper.css";
import LoadingComponent from "../../layout/LoadingComponent";
import {
  submitBlog,
  getImages,
  setProfilePicture
} from "../../auth/authActions";
import { setEquipmentPhoto } from "../equipment/equipmentAction";
import { openModal } from "../modals/modalActions";

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
    width: 200,
    height: 200
  };

  componentDidMount() {
    this.props.getImages();
  }
  changeType = (e, { value }) => {
    this.setState({ type: value });
    console.log(value);
  };
  onSubmit = () => {
    const { submitBlog } = this.props;
    console.log("Files", this.state.files);
    console.log("Image", this.state.image);
    console.log("Crop Result", this.state.cropResult);
    submitBlog(this.state.image);
  };
  addEquip = () => {
    const { setEquipmentPhoto } = this.props;
    // console.log("Files", this.state.files);
    // console.log("Image", this.state.image);
    // console.log("Crop Result", this.state.cropResult);
    console.log(this.state.type);
    setEquipmentPhoto(this.state.image, this.state.type);
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
      image: {}
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
      fileName: files[0].name
    });
  };
  render() {
    const { fileImages, loading, openModal } = this.props;
    if (fileImages === undefined) {
      <LoadingComponent />;
    }
    console.log(fileImages);
    return (
      <Segment>
        <Header dividing size="large" content="Your Photos" />
        <Grid>
          <Grid.Row />
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step 1 - Add Photo" />
            <Dropzone onDrop={this.onDrop} multiple={false}>
              <div style={{ paddingTop: "30px", textAlign: "center" }}>
                <Icon name="upload" size="huge" />
                <Header content="Drop image here or click to add" />
              </div>
            </Dropzone>
            <Button onClick={() => this.props.getImages()}>Get Images</Button>
            <Button onClick={() => openModal("EquipmentAddModal")}>
              Open Modal
            </Button>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 2 - Resize image" />
            {this.state.files[0] && (
              <div>
                <ReactAvatarEditor
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

                <Button onClick={this.cropImage}>Preview</Button>
              </div>
            )}
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 3 - Preview and Upload" />
            {this.state.files[0] && (
              <div>
                <Image
                  style={{ minHeight: "300px", minWidth: "300px" }}
                  src={this.state.cropResult}
                />
                <Button.Group>
                  <Button
                    onClick={this.onSubmit}
                    style={{ width: "100px" }}
                    positive
                    icon="check"
                  />
                  <Button
                    onClick={this.cancelCrop}
                    style={{ width: "100px" }}
                    icon="close"
                  />
                </Button.Group>
              </div>
            )}
          </Grid.Column>
        </Grid>
        Type of Equipment{" "}
        <Dropdown
          onChange={this.changeType}
          value={this.state.type}
          inline
          options={equipmentType}
          // defaultValue={equipmentType[4].value}
        />
        <Button onClick={this.addEquip} positive>
          Add Equipment
        </Button>
        <Divider />
        <Header sub color="teal" content="All Photos" />
        <Card.Group itemsPerRow={5}>
          <Card>
            {/* <Image src={profile.photoURL || "/assets/user.png"} /> */}
            <Button positive>Main Photo</Button>
          </Card>
          {fileImages &&
            fileImages.map(image => (
              <Card key={image.name}>
                <Image
                  src={`https://s3-ap-southeast-1.amazonaws.com/test-social-123/${
                    image.url
                  }`}
                />
                <div className="ui two buttons">
                  <Button
                    onClick={() =>
                      this.setPicture(
                        `https://s3-ap-southeast-1.amazonaws.com/test-social-123/${
                          image.url
                        }`
                      )
                    }
                    basic
                    color="green"
                  >
                    Main
                  </Button>
                  <Button
                    // onClick={this.handlePhotoDelete(image)}
                    basic
                    icon="trash"
                    color="red"
                  />
                </div>
              </Card>
            ))}
        </Card.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.auth.images);
  return {
    loading: state.auth.isLoading,
    fileImages: state.auth.images
  };
};

export default connect(
  mapStateToProps,
  { submitBlog, getImages, openModal, setProfilePicture, setEquipmentPhoto }
)(PhotosPage);
