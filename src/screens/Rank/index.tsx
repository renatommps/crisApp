import React, { useState, useCallback, useEffect } from "react";
import { ActivityIndicator, View, ScrollView, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import api from "../../utils/api";

interface Friend {
  name: string,
  email: string,
  pontuation: number
};

// amigos para teste
// const dummyFriends: Friend[] = [
//   {
//     name: 'Joaozinho',
//     email: 'joaozinho@gmail.com',
//     pontuation: 4
//   },
//   {
//     name: 'Maria',
//     email: 'maria@gmail.com',
//     pontuation: 0
//   },
//   {
//     name: 'Jureide',
//     email: 'jureide@gmail.com',
//     pontuation: 4
//   },
//   {
//     name: 'Marciolino',
//     email: 'marciolino@gmail.com',
//     pontuation: 9
//   },
//   {
//     name: 'Debora',
//     email: 'deboramariajaquelinadossantos@gmail.com',
//     pontuation: 9
//   },
//   {
//     name: 'Jose inácio juresmindo',
//     email: 'juseinaciojuresmindodasilva@gmail.com',
//     pontuation: 9
//   },
//   {
//     name: 'Amada',
//     email: 'amada@gmail.com',
//     pontuation: 9
//   },
//   {
//     name: 'Ona',
//     email: 'ona@gmail.com',
//     pontuation: 9
//   },
// ];

const Rank = () => {
  const { user, token } = useAuth();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [pontuation, setPontuation] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    // Create an scoped async function in the hook
    async function handleProfileUpdate() {
      // console.log('inside handleProfileUpdate');
      await updateProfile();
    }
    // Execute the created function directly
    handleProfileUpdate();
  }, [isFocused]);

  useEffect(() => {
    updateRank();
    getFriends();
  }, []);

  useEffect(() => {
    updateRank();
  }, [pontuation]);

  const updateRank = (newFriends?: Friend[]) => {
    console.log('[updateRank] newFriends: ', newFriends, ', friends:', friends, ', userPontuation:', pontuation);
    const userAsFriend: Friend = {
      name: user.name,
      email: user.email,
      pontuation: pontuation || 0
    };
    const updatedFriends: Friend[] = [...(newFriends ?? friends), userAsFriend].sort(sortFriendsByPonctuation);
    setFriends(updatedFriends);
  };

  const updateProfile = useCallback(async () => {
    try {
      if (!user || !user.id || !isFocused) return;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const bodyParameters = {
        id: user.id,
        pontuation: 0,
      };

      api
        .patch("profile", bodyParameters, config)
        .then(function (response) {
          if (response?.data?.pontuation && isFocused) {
            setPontuation(response.data.pontuation);
          }
        })
        .catch(function (error) {
          console.log("response:", error);
        });
    } catch (ex) {
      console.log("Could not get user profile.", ex);
    }
  }, []);

  const FriendsList = (props: any) => {
    if (!props?.friends) return null;
    const friends: Friend[] = props.friends;

    const friendsItems = friends.map((friend, index) =>
      <View key={index} style={styles.friend}>
        <View style={styles.friendPosition}>
          <Text style={styles.friendPositionValue}>{index + 1}</Text>
        </View>
        <View style={styles.friendData}>
          <View style={styles.friendInfo}>
            <Text style={styles.friendInfoName}>Nome: </Text>
            <Text style={styles.friendInfoValue}>{friend.name}</Text>
          </View>
          <View style={styles.friendInfo}>
            <Text style={styles.friendInfoName}>E-mail: </Text>
            <Text style={styles.friendInfoValue}>{friend.email}</Text>
          </View>
          <View style={styles.friendInfo}>
            <Text style={styles.friendInfoName}>Pontuação: </Text>
            <Text style={styles.friendInfoValue}>{friend.pontuation}</Text>
          </View>
        </View>
      </View>
    );

    return (
      <ScrollView style={styles.friendsContainer}>
        {friendsItems}
      </ScrollView>
    );
  }

  const getFriends = useCallback(async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      api.get("/profile/friendlist", config)
        .then(function (response) {
          console.log('response data:', response.data);
          if (response?.data) {
            updateRank(response.data);
          }
        })
        .catch(function (error) {
          console.log("error get friendlist:", error);
        });
    } catch (ex) {
      console.log("Could not get user profile.", ex);
    }
  }, []);

  const sortFriendsByPonctuation = (a: Friend, b: Friend) => {
    if (a.pontuation === b.pontuation) {
      return (a.name === b.name) ? a.email.localeCompare(b.email) : a.name.localeCompare(b.name);
    }
    return b.pontuation - a.pontuation;
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#EDC951" />}
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Ranque</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FriendsList friends={friends}/>
      </View>
    </View>
  );
};

export default Rank;
