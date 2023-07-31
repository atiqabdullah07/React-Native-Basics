import * as React from 'react';
import {Text, View, TextInput, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

type Data = {
  id: string;
  text: string;
};

export default function App() {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState<Data[]>([]);

  function press() {
    setData([...data, {id: Date.now().toString(), text: text}]);
    setText('');
  }

  const renderItem = ({item, index}: {item: Data; index: number}) => {
    return (
      <View
        style={{
          padding: 10,
          marginTop: 20,
          marginHorizontal: 20,
          flexDirection: 'row',
          height: 50,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: 'teal',
        }}>
        <View
          style={{
            backgroundColor: 'teal',
            width: 35,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <Text style={{color: 'white'}}>{index + 1}</Text>
        </View>
        <Text style={{flex: 1, paddingLeft: 10}}>{item.text}</Text>
        <TouchableOpacity
          onPress={() => {
            const newData = [...data];
            newData.splice(index, 1);
            setData(newData);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'teal', fontWeight: 'bold'}}>Delete </Text>
            <Icon name="delete" size={30} color="teal" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 60,
          backgroundColor: 'teal',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}>
        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
          To Do List
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginTop: 16,
        }}>
        <TextInput
          style={{
            flex: 1,
            marginRight: 16,
            paddingLeft: 10,
            borderWidth: 2,
            borderColor: 'teal',
            borderRadius: 50,
            padding: 8,
            fontSize: 16,
          }}
          onChangeText={setText}
          value={text}
          placeholder='New Task'
          // mode="outlined"
          // label={<Text style={{fontSize: 20}}>{'Enter an item'}</Text>}
          // right={<TextInput.Icon icon="arrow-down-circle-outline" ></TextInput.Icon>}
        />
        <Button
          style={{borderColor: 'teal', borderWidth: 2}}
          textColor="teal"
          onPress={press}>
          Add
        </Button>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
