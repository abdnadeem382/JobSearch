import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./nearbyjobs.style";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useFetch } from "../../../hooks/useFetch";

const NearbyJobs = () => {
  const router = useRouter();
  const { data, error, isLoading, refetch } = useFetch("search", {
    query: "React Developer",
    num_pages: "1",
  });

  const handleNavigate = () => {
    router.push(`/job-details/${job?.job_id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job?.job_id}`}
              item={job}
              handleNavigate={handleNavigate}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
