import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [savedAmount, setSavedAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [history, setHistory] = useState([]);

  const handleCalculation = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    const saved = (original * discount) / 100;
    const final = original - saved;
    setSavedAmount(saved.toFixed(2));
    setFinalPrice(final.toFixed(2));
    setHistory([...history, {originalPrice, discountPercentage, finalPrice}]);
  };

  const renderItem = ({item}) => (
    <Text>
      {item.originalPrice} - {item.discountPercentage}% = {item.finalPrice}
    </Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Original Price"
        value={originalPrice}
        onChangeText={setOriginalPrice}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Discount Percentage"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
      />

      <TouchableOpacity onPress={handleCalculation}>
        <View
          style={{
            height: 50,
            width: 350,
            backgroundColor: 'teal',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}>
            Calculate
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.result}>You save: {savedAmount}</Text>
      <Text style={styles.result}>Final price: {finalPrice}</Text>
      <View style={styles.historyContainer}>
      <TouchableOpacity onPress={handleCalculation}>
        <View
          style={{
            height: 50,
            width: 350,
            backgroundColor: 'teal',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}>
            Hisory
          </Text>
        </View>
      </TouchableOpacity>
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'teal',
  },
  input: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },

 
  result: {
    fontSize: 18,
    marginBottom: 10,
  },
  historyContainer: {
    width: '80%',
    marginTop: 20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  },
  historyButton: {
    marginBottom: 10,
    borderTopEndRadius: 100,
    borderRadius: 100,
  },
});
