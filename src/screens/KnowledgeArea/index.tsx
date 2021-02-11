import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import article from './article.js';

const myArticle = article;
export default class KnowledgeArea extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Código de Trânsito Brasileiro</Text>
        </View>
        <View style={styles.textContainer}>
         <ScrollView>
          <Text style={styles.textContent}>
            {myArticle}
          </Text>
         </ScrollView>
        </View>
      </View>
    );
  }
}
