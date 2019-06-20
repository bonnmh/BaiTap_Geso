import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHe}>
          <View style={styles.red}>
            <View style={styles.iRed} />
          </View>
          <View style={styles.ThongTin}>
            <Text style={styles.txtThongTin}>Thông tin tài khoản</Text>
          </View>
          <View style={styles.BatBuoc}>
            <Text style={styles.txtBatBuoc}>(bắt buộc)</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.txtLine} />
          </View>
        </View>
        <View style={styles.containerDe}>
         <View style = {{flex : 1, alignItems : 'center' , justifyContent : 'center' }}>
          <Image source={require("./Asset/img/xinh.jpg")}  style={{width: 150, height: 150}}/>
        </View>
         <View style = {{flex : 2 , flexDirection :'column' }}>
           <View style = {{justifyContent :'center' , flexDirection : 'row' ,margin : 2  , flexDirection : 'row'}}>
              <View style = {{ flex : 1}}></View>
              <View style = {{ flex : 5  , flexDirection : 'row'}}>
                <Text style = {{flex : 2 }}>Họ tên :</Text>
                <Text style = {{color :'#1676C1' , flex : 8 }}>Nguyễn Văn A</Text>
              </View>
             
           </View>
           <View style = {{justifyContent :'center' , flexDirection : 'row' ,margin : 2  , flexDirection : 'row'}}>
              <View style = {{ flex : 1}}></View>
              <View style = {{ flex : 5  , flexDirection : 'row'}}>
                <Text style = {{flex : 2 }}>Giới tính :</Text>
                <Text style = {{color :'#1676C1' , flex : 7 }}>Nam</Text>
              </View>
             
           </View>
           <View style = {{justifyContent :'center' , flexDirection : 'row' ,margin : 2  , flexDirection : 'row'}}>
              <View style = {{ flex : 1}}></View>
              <View style = {{ flex : 5  , flexDirection : 'row'}}>
                <Text style = {{flex : 3 }}>Ngày sinh :</Text>
                <Text style = {{color :'#1676C1' , flex : 9 }}>11-11-2011</Text>
              </View>
             
           </View>
           <View style = {{justifyContent :'center' , flexDirection : 'row' ,margin : 2  , flexDirection : 'row'}}>
              <View style = {{ flex : 1}}></View>
              <View style = {{ flex : 5  , flexDirection : 'row'}}>
                <Text style = {{flex : 4 }}>Chỗ ở hiện tại :</Text>
                <Text style = {{color :'#1676C1' , flex : 8 }}>Phường 1, quận 4</Text>
              </View>
             
           </View>
           <View style = {{justifyContent :'center' , flexDirection : 'row' ,margin : 2  , flexDirection : 'row'}}>
              <View style = {{ flex : 1}}></View>
              <View style = {{ flex : 5  , flexDirection : 'row'}}>
                <Text style = {{flex : 4 }}>Số điện thoại :</Text>
                <Text style = {{color :'#1676C1' , flex : 8 }}>0909090909</Text>
              </View>
             
           </View>
           <View style = {{justifyContent :'center' , flexDirection : 'row' ,margin : 2  , flexDirection : 'row'}}>
              <View style = {{ flex : 1}}></View>
              <View style = {{ flex : 5  , flexDirection : 'row'}}>
                <Text style = {{flex : 2 }}>Email :</Text>
                <Text style = {{color :'#1676C1' , flex : 10 }}>bonnmh1703@gmail.com</Text>
              </View>
             
           </View>

         </View>
        </View>
      </View>
    );
  }
}

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
    flex: 0.6,
    paddingHorizontal: 18,
    paddingVertical: 8
  },
  iRed: {
    flex: 1,
    backgroundColor: "red"
  },
  ThongTin: {
    flex: 13
  },
  txtThongTin: {
    color: "#1676C1",
    marginTop: 8,
    fontSize: 16
  },
  line: {
    flex: 12
  },
  txtLine: {
    borderBottomWidth: 1,
    borderColor: "#DBDBDB",
    marginLeft: 10
  },
  BatBuoc: {
    flex: 5
  },
  txtBatBuoc: {
    color: "#1676C1",
    marginTop: 12,
    fontSize: 11,
    textAlign: "center"
  }
});
