import React, { forwardRef } from "react";
import { Text, View } from '../Themed';
import { Image, StyleSheet, Button} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { max } from "react-native-reanimated";



const Post = React.forwardRef(
    ({ navigation, username, email, verified, text, image, avatar }, ref) => {

        const Comment = () => {
            navigation.navigate("Comment", {
                id : avatar
            });
        }

        const goUser = () => {
            navigation.navigate("Profile", {
                user : verified
            });
        }
        return (
                <View ref={ref}>
                    <View style={styles.body} >
                        <View>
                            <View style={styles.headerText} >
                                <Text onPress={goUser}>{username}</Text>
                                <View style={styles.headerSpecial} >
                                    <Text onPress={goUser}>{email}</Text>
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
                    <MaterialIcons name="favorite" size={24} color="black" />
                    <Button color="#841584" onPress={Comment} title="comentar" ></Button>
                </View>
        );
    }
);

const styles = StyleSheet.create({
    body: {
      flex: 1,
      padding: 10,
      marginRight: 100,
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