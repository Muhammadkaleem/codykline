import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";

export class DetailScreenComment extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 8
          }}
        >
          <Text style={{ fontWeight: "700" }}>{this.props.comment}</Text>
          <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
            <Image
              style={this.props.ImageSource}
              source={images.blue_pin}
              resizeMode="contain"
            />
            <Image
              style={this.props.IconStyle}
              source={this.props.Icon}
              resizeMode="contain"
            />
            <Image
              style={this.props.IconStyle}
              source={this.props.Icon}
              resizeMode="contain"
            />
            <Image
              style={this.props.IconStyle}
              source={this.props.Icon}
              resizeMode="contain"
            />
            <Image
              style={this.props.IconStyle}
              source={this.props.Icon}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              marginTop: hp("1%")
            }}
          >
            <Text>{this.props.date}</Text>
            <Text style={{ marginTop: hp("1%") }}>
              {this.props.description}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default DetailScreenComment;
const styles = StyleSheet.create({
  swiperContainer: {
    height: hp("35%")
  },
  image: {
    height: wp("45%"),
    width: wp("45%"),
    marginTop: hp("1%")
  },
  dotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    borderWidth: 1,
    backgroundColor: colors.white
  },
  activeDotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    backgroundColor: colors.gray
  },
  description: {
    alignItems: "center"
  },
  QuantityItem: {
    marginTop: hp("5%"),
    alignItems: "center"
  },
  downArrowStyle: {
    width: wp("4.5%"),
    height: hp(config.h_b_b_h),
    tintColor: colors.gray,
    marginLeft: wp("5.5%"),
    marginTop: hp("1.7%")
  },
  addToShoppingCart: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    height: hp("7%"),
    width: wp("65%"),
    marginTop: hp("5%"),
    borderRadius: 4
  },
  addComment: {
    fontSize: 16,
    color: colors.blue,
    marginRight: wp("2%"),
    marginTop: hp("1%")
  },
  commentContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: colors.gray,
    height: hp("20%"),
    width: wp("90%"),
    alignSelf: "center",
    marginBottom: 5
  },
  starStyle: {
    width: wp("4.5%"),
    height: hp(config.h_b_b_h),
    tintColor: colors.gray,
    marginLeft: wp("1%"),
    marginTop: hp("1%")
  }
});
