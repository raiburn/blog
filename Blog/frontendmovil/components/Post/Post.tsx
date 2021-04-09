import React, { forwardRef } from "react";
import { Text, View } from '../Themed';
import { Image, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons';
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
                        <Entypo name="chat" size={24} color="black" />
                        <MaterialIcons name="favorite" size={24} color="black" />
                    </View>
                    <View style={styles.avatar}>
                        <Text>{avatar}</Text>
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