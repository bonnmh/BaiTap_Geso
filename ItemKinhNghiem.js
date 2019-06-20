import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default class ItemKinhNghiem extends Component {
  constructor(props){
    super(props) ;
    this.state = {
      
    }
  }
  render() {
    const { id_KinhNghiem,  ChucDanh, ThoiGian_Tu, ThoiGian_Den } = this.props.ItemKinhNghiem;
    return (
      <View style={styles.container}>
        <View style={styles.containerHe}>
          <Text style={styles.textBold}>{ThoiGian_Tu}</Text>
          <Text style={styles.textBold}> đến {ThoiGian_Den} : </Text>
          <Text style={styles.textBoldBlack}>{ChucDanh}</Text>
        </View>
        <View>
          <TouchableOpacity  onPress={() => this.props.onPress(id_KinhNghiem)}>
            <Text>[Xem đầy đủ]</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={styles.btnSua}>
              <Icon name="edit" size={21} color="#929292" />
              <Text style={{ color: "#929292", marginLeft: 2 }}>Sửa</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.btnSua, { marginLeft: 5 }]}>
              <Icon name="trash" size={21} color="#929292" />
              <Text style={{ color: "#929292", marginLeft: 2 }}> Xóa</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5
    // padding : 5
  },
  containerHe: {
    flexDirection: "row"
  },
  textBold: {
    color: "#1676C1"
  },
  textBoldBlack: {
    fontWeight: "bold",
    color: "#000"
  },
  btnSua: {
    borderColor: "#DCDCDC",
    borderWidth: 1,
    paddingHorizontal: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 2,
    padding: 3
  }
});
