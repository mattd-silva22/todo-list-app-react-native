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
                <Text  style={style.itemText}  > {props.text}</Text>
            </View>

            <View>
                <Text style={style.removeBtn}>X</Text>
            </View>
            
        </View>

       
    )



}


const style = StyleSheet.create({
    item: {
        backgroundColor: '#444444',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    itemText: {
        maxWidth: '80%',
        color: '#fff'
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    removeBtn: {
        color: '#DA0037'
    }

    
});




