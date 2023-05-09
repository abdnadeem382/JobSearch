import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons, DEFAULT_COMPANY_LOGO } from "../../../constants";
import { checkImageURL, formatJobPostingTime } from "../../../utils";

const Company = ({ jobTitle, logo, location, companyName, postingTime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          src={checkImageURL(logo) ? logo : DEFAULT_COMPANY_LOGO}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
      <View style={{ marginTop: 6 }}>
        <Text>Posted at: {formatJobPostingTime(postingTime)}</Text>
      </View>
    </View>
  );
};

export default Company;
