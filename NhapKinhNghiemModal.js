import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Modal from "react-native-modal";
import NhapKinhNghiem from "./NhapKinhNghiem.js";
let screen = Dimensions.get("window");
export default class NhapKinhNghiemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      off: true 
    };
    
    console.log(this.props.TMP)
  }
  componentWillUpdate(){
    console.log(this.props.TMP )
  }
  render() {
    return (
      <Modal
        isVisible={this.props.HIDE}
        animationInTiming={500}
        onBackdropPress={() => this.props.OnClick()}
        // onSwipeStart={() => this.props.OnClick()}
        // swipeDirection = 'down'
        
        //children={()=>{console.log(this.props.Arr)}}
        //onModalWillShow={()=>{}}
        children = {this.props.TMP}
        style={{
          borderRadius: 10,
          width: screen.width - 30,
          height: screen.height - 300,
          borderWidth: 1,
          overflow: "hidden",
          borderColor: "#DCDCDC"
        }}
      >
        <View
          style={{
            flex: 2,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: 17,
              flex: 8,
              borderBottomWidth: 1,
              borderBottomColor: "#DCDCDC",
              marginHorizontal: 30
            }}
          >
            Nhập thông tin kinh nghiệm
          </Text>
        </View>

        <View
          style={{
            flex: 10,
            backgroundColor: "white",
            borderBottomWidth: 1,
            paddingTop: 20,
            borderBottomColor: "#DCDCDC"
          }}
        >
          <NhapKinhNghiem style={{ flex: 3 }}  />
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "white",
              flex: 1
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress ={() => this.props.OnClick()}
            >
              <Text style={{ fontSize: 20 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
    // padding : 5
  }
});
