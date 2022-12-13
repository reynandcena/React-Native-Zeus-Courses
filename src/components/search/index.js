import React from "react";
import {
  TextInput,
  View,
  Keyboard,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { COLORS } from "../../utils/constants";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="What do you want to learn?"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <TouchableOpacity
            onPress={() => {
              setSearchPhrase("");
            }}
          >
            <MaterialCommunityIcons
              name="close-circle"
              size={20}
              color="#727273"
              style={{ padding: 1 }}
            />
          </TouchableOpacity>
        )}
        {clicked && (
          <TouchableOpacity onPress={() => navigation.navigate("FilterScreen")}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={20}
              color="#727273"
              style={{ padding: 1, marginLeft: 16 }}
            />
          </TouchableOpacity>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <TouchableOpacity
          style={{ marginLeft: 8 }}
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
          }}
        >
          <Text style={[styles.filledButtonText, { color: COLORS.themeColor }]}>
            Cancel
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
