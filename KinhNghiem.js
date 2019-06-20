import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import ItemKinhNghiem from "./ItemKinhNghiem.js";
import NhapKinhNghiemModal from "./NhapKinhNghiemModal.js";

export default class KinhNghiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_NhapThongTin: false,
      isModalVisible: false,
      id: 0,
      ArrKinhNghiem: [
        {
          id_KinhNghiem: 0,
          CongTy: "Geso",
          ChucDanh: "Thực tập sinh",
          ThoiGian_Tu: "March, 2019",
          ThoiGian_Den: "March, 2020",
          LoaiTien: "$",
          MucLuong: "0",
          MoTaCV: "OK OK OK OK OK OK OK",
          ThanhTich: "Chưa đạt được gì ~~"
        },
        {
          id_KinhNghiem: 1,
          CongTy: "Geso",
          ChucDanh: "Developer App",
          ThoiGian_Tu: "March, 2018",
          ThoiGian_Den: "March, 2020",
          LoaiTien: "$",
          MucLuong: "1000000",
          MoTaCV: "OK OK OK OK OK OK OK",
          ThanhTich: "Chưa đạt được gì ~~"
        },
        {
          id_KinhNghiem: 2,
          CongTy: "Geso",
          ChucDanh: "Developer Ios",
          ThoiGian_Tu: "March, 2000",
          ThoiGian_Den: "March, 2020",
          LoaiTien: "$",
          MucLuong: "10",
          MoTaCV: "OK OK OK OK OK OK OK",
          ThanhTich: "Chưa đạt được gì ~~"
        }
      ]
    };
  }
  onShow_nhap_thong_tin = () => {
    this.setState({
      show_NhapThongTin: !this.state.show_NhapThongTin
    });
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  OnClick = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  onPress = id => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      id : id
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHe}>
          <View style={styles.red}>
            <View style={styles.iRed} />
          </View>
          <View style={styles.ThongTin}>
            <Text style={styles.txtThongTin}>Kinh nghiệm làm việc</Text>
          </View>
          <View style={styles.BatBuoc}>
            <Text style={styles.txtBatBuoc}>(bắt buộc)</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.txtLine} />
          </View>
        </View>
        <View style={styles.containerDe}>
          <View style={{ flex: 2, padding: 5 }}>
            <Text style={{ flex: 10 }}>
              Hãy liệt kê những công việc và nhiệm vụ mà bạn đã từng đảm nhận và
              thực hiện . Chú ý liệt kê những công việc từ thời gian gần đây
              nhất về trước
            </Text>
            <Text style={styles.line_txt} />
          </View>

          <View style={{ flex: 13 }}>
            <FlatList
              data={this.state.ArrKinhNghiem || []}
              renderItem={({ item }) => (
                <ItemKinhNghiem ItemKinhNghiem={item} onPress={this.onPress} />
              )}
              keyExtractor={item => {
                item.id_KinhNghiem;
              }}
            />
            <View style={{ flex: 0.2, flexDirection: "row" }} />
            <NhapKinhNghiemModal
              HIDE={this.state.isModalVisible}
              OnClick={this.OnClick}
              style={{ flex: 1 }}
              TMP={this.state.ArrKinhNghiem[this.state.id]}
            />
            <View
              style={{
                borderWidth: 1,
                position: "absolute",
                bottom: 0,
                alignSelf: "flex-end",
                borderRadius: 100,
                overflow: "hidden",
                borderColor: "#DCDCDC",
                margin: 10,
                width: 40,
                height: 40,
                backgroundColor: "red"
              }}
            >
              <TouchableOpacity onPress={this.toggleModal}>
                <Text
                  style={{
                    height: 40,
                    width: 40,
                    textAlign: "center",
                    textAlignVertical: "center",
                    color: "white"
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  containerHe: {
    flex: 1,
    flexDirection: "row"
  },
  containerDe: {
    flex: 14,
    flexDirection: "column"
  },
  red: {
    flex: 0.4,
    paddingHorizontal: 18,
    paddingVertical: 8
  },
  iRed: {
    flex: 1,
    backgroundColor: "red"
  },
  ThongTin: {
    flex: 18
  },
  txtThongTin: {
    color: "#1676C1",
    marginTop: 8,
    fontSize: 16
  },
  line: {
    flex: 10
  },
  txtLine: {
    borderBottomWidth: 1,
    borderColor: "#DBDBDB",
    marginLeft: 10,
    marginHorizontal: 15
  },
  BatBuoc: {
    flex: 10
  },
  txtBatBuoc: {
    color: "#1676C1",
    marginTop: 12,
    fontSize: 11,
    textAlign: "center"
  },
  line_txt: { borderBottomWidth: 1, flex: 1, borderBottomColor: "#DCDCDC" },
  txt_line_show: {
    borderBottomWidth: 1,
    flex: 15,
    borderBottomColor: "#DCDCDC",
    marginHorizontal: 5,
    marginBottom: 3
  }
});
