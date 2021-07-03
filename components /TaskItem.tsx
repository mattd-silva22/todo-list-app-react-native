import React from "react";
import { View, Text ,StyleSheet} from "react-native";

type TaskProps = {
    text: string;

}


export function TaskItem(props:TaskProps) {
    
    return (
        <View style={style.item}> 
            <View style={style.itemLeft}>
                <View style={style.square}></View>
                <Text  style={style.itemText}  >This is a task {props.text}</Text>
            </View>

            <View style={style.circular}>

            </View>
            
        </View>

       
    )



}


const style = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    itemText: {
        maxWidth: '80%',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 5,
    }
});



