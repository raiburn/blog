import React, { forwardRef } from "react";
import { Text, View } from '../Themed';
import { Image, StyleSheet, Button} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 



const Post = React.forwardRef(
    ({ email, username, verified, text, image, avatar }, ref) => {

        return (
                <View ref={ref}>
                    <View style={styles.body} >
                        <View>
                            <View style={styles.headerText} >
                                <Text>{email}</Text>
                                <View style={styles.headerSpecial} >
                                    <Text>{verified}</Text>
                                    <Text>{username}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.headerDescription} >
                            <Text>{text}</Text>
                        </View>
                    </View>
                    <View >
                        <Image source={image}></Image>
                    </View>
                    <View style={styles.footer} >
                        <MaterialIcons name="favorite" size={24} color="black" />
                    </View>
                </View>
        );
    }
);

const styles = StyleSheet.create({
    body: {
      flex: 1,
      padding: 10
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerText: {
      fontSize: 15,
      marginBottom: 5,
    },
    headerSpecial:{
        fontWeights: 600,
        fontSize: 12,
        color: '#a9a9a9',
    },
    headerDescription:{
        marginBottom: 10,
        fontSize: 15,
    },
    footer:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    avatar:{
        padding:20,
    }
  });

export default Post;