import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MakeList() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const [entry, setEntry] = useState("")
    const [count, setCount] = useState(0)

    function add(newItem) {
        if (newItem !== "") {
            let copy = list
            copy.push({ "item": newItem, "done": false })
            setList([...copy])
            setInput("")
        }
    }
    function remove(item) {
        let copy = list
        let index = copy.indexOf(item)
        copy.splice(index, 1)
        setList([...copy])
    }
    function edit(value, item) {
        let copy = list
        let index = copy.indexOf(item)
        copy[index]["item"] = value
        setList([...copy])
    }
    function erase(value, item) {
        if (value["nativeEvent"]["text"] === "" || value["nativeEvent"]["text"] === null) {
            remove(item)
        }
    }
    function done(item) {
        let copy = list
        let index = copy.indexOf(item)
        copy[index]["done"] = !copy[index]["done"]
        setList([...copy])
    }
    return (
        <ScrollView>
            <TouchableOpacity style={{marginTop: 30, marginLeft: 7}}>
                <MaterialIcons name='keyboard-arrow-left' color='black' size={40} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.mainContainer}>
                    <Text style={styles.titleFont}>to do</Text>
                    <TextInput
                        placeholder="Add an item to do!"
                        onChangeText={input => setInput(input)}
                        value={input}
                        onSubmitEditing={() => add(input)}
                        style={styles.inputText}>
                    </TextInput>
                    <View>
                        {list.map(item => {
                            return (
                                <View style={{ flexDirection: 'row' }}>
                                    {/* {console.log(list)} */}
                                    <TouchableOpacity onPress={() => { done(item) }} onLongPress={() => remove(item)}>
                                        <MaterialIcons
                                            name={item["done"] ? 'check-circle' : 'radio-button-unchecked'}
                                            color='black'
                                            size={20}
                                            style={styles.icon} />
                                    </TouchableOpacity>
                                    <TextInput
                                        value={item["item"]}
                                        onChangeText={entry => { edit(entry, item); setEntry(entry) }}
                                        onSubmitEditing={value => erase(value, item)}
                                        style={styles.entryText}
                                        textDecorationLine={item["done"] ? 'line-through' : 'none'}
                                    // multiline={true}
                                    ></TextInput>
                                    {/* <Text style={styles.entryText}>{item["item"]}</Text> */}
                                </View>
                            )
                        })}
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 20
    },
    icon: {
        marginRight: 3,
        marginTop: 2
    },
    titleFont: {
        fontFamily: 'Poppins-Regular',
        fontSize: 70,
        color: 'black'
    },
    inputText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18.5,
        color: 'black',
        marginBottom: 7
    },
    entryText: {
        fontFamily: 'Poppins-Light',
        fontSize: 16.5,
        color: 'black',
        flex: 1
    }
})