import React, { useEffect, useCallback, useState } from "react";
import { Alert, Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar } from 'react-native-paper';
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import api from "../../utils/api";
import * as ImagePicker from 'expo-image-picker';
import defaultAvatar from "../../assets/avatar.png";

// import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const navigation = useNavigation();
  const { token, user } = useAuth();
  const [pontuation, setPontuation] = useState<number>(0);
  const isFocused = useIsFocused();
  const [avatar, setAvatar] = useState<any>(null);

  useEffect(() => {
    // console.log('[auth useEffect  called]');
    async function loadAvatar(): Promise<void> {
      // console.log('[auth useEffect loadStoreData called]');
      try {
        const userAvatar = await AsyncStorage.getItem("@Cris:userAvatar");
        if (userAvatar) setAvatar(JSON.parse(userAvatar));
      } catch (ex) {
        console.log('Error loading user avatar from storage:', ex);
      }
    }
    loadAvatar();
  }, []);

  useEffect(() => {
    // console.log('inside userEffect, user:', user);
    // Create an scoped async function in the hook
    async function handleProfileUpdate() {
      // console.log('inside handleProfileUpdate');
      await updateProfile();
    }

    // Execute the created function directly
    handleProfileUpdate();
  }, [isFocused]);

  const pickImage = async () => {
    if (Platform.OS == 'web') return;

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Desculpe, para atualizar o avatar é preciso permissão para acessar os arquivos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled && result.uri) {
      setAvatar(result.uri);
      try {
        AsyncStorage.setItem("@Cris:userAvatar", JSON.stringify(result.uri));
      } catch (ex) {
        console.log('Error saving user avatar to storage:', ex);
      }
    }
  };

  const updateProfile = useCallback(async () => {
    try {
      if (!user || !user.id) return;

      // console.log('inside updateProfile, will call api profile with id:', user.id);

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const bodyParameters = {
        id: user.id,
        pontuation: 0
      };

      // console.log('config:', bodyParameters, config);
      // console.log('Authorization:', token);
      api.patch("profile", bodyParameters, config)
      .then(function (response) {
        // console.log('response:', response, 'pontuation:', response.data.pontuation);
        if (response?.data?.pontuation) setPontuation(response.data.pontuation);
      })
      .catch(function (error) {
        console.log('response:', error);
      })
    } catch (ex) {
      console.log("Could not get user profile.", ex);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {avatar | defaultAvatar ?
        <Avatar.Image size={96} style={styles.avatar} source={avatar ? {uri: avatar} : defaultAvatar} />
        : ""}
        <TouchableOpacity style={styles.btnUpdateAvatar} onPress={pickImage}>
          <Text style={styles.btnUpdateAvatarText}>Atualizar Avatar</Text>
        </TouchableOpacity>
        {/* @ts-ignore */}
        <Text style={styles.pontuationText}>Olá, {user.name}</Text>
        <Text style={styles.pontuationText}>Sua pontuação</Text>
        {/* @ts-ignore */}
        <Text style={styles.pontuationValue}>{pontuation ?? 0}pts</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("KnowledgeArea")}
        >
          <Text style={styles.bottomText}>Área do Conhecimento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Linking.openURL(
              "https://docs.google.com/forms/d/e/1FAIpQLSedsUZp-Yx59O0LfSkxYzwfW-9hKXru7u_xojOob_5wuQxCzg/viewform"
            );
          }}
        >
          <Text style={styles.bottomText}>#FaleComOCris</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.btn} onPress={signOut}>
          <Text style={styles.bottomText}>Logout</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
export default Profile;
