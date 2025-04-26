import React, { useState } from 'react';
import { SafeAreaView, View, Button, Modal, TextInput, Text, Alert } from 'react-native';
import ShoppingList from './components/ShoppingList';
import FilterBar from './components/FilterBar';
import { styles } from './style/styles';

export default function App() {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', store: '' });
  const [priceError, setPriceError] = useState('');

  const [filterStore, setFilterStore] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const addProduct = () => {
    const parsedPrice = parseFloat(newProduct.price);

    if (!newProduct.name || !newProduct.store) {
      Alert.alert('Wypełnij wymagane pola "Nazwa, Sklep" ');
      return;
    } 

    if (isNaN(parsedPrice)) {
      Alert.alert('Cena musi być liczbą!');
      return;
    }

    setProducts([
      { ...newProduct, price: parsedPrice, bought: false },
      ...products,
    ]);
    setNewProduct({ name: '', price: '', store: '' });
    setPriceError('');
    setModalVisible(false);
  };

  const deleteProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const toggleBought = (index) => {
    const updated = [...products];
    updated[index].bought = !updated[index].bought;
    setProducts(updated.sort((a, b) => a.bought - b.bought));
  };

  const filteredProducts = products.filter((p) => {
    const matchesStore = p.store.toLowerCase().includes(filterStore.toLowerCase());
    const price = p.price;
    const minOk = minPrice === '' || price >= parseFloat(minPrice);
    const maxOk = maxPrice === '' || price <= parseFloat(maxPrice);
    return matchesStore && minOk && maxOk;
  });

  const resetFilters = () => {
    setFilterStore('');
    setMinPrice('');
    setMaxPrice('');
    setFilterModalVisible(false); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="Dodaj Produkt" onPress={() => setModalVisible(true)} />
        <Button title="Filtruj" onPress={() => setFilterModalVisible(true)} />
      </View>

      <ShoppingList
        products={filteredProducts}
        onDelete={deleteProduct}
        onToggleBought={toggleBought}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            placeholder="Nazwa produktu"
            value={newProduct.name}
            onChangeText={(text) => setNewProduct({ ...newProduct, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Cena"
            keyboardType="numeric"
            value={newProduct.price}
            onChangeText={(text) => {
              setNewProduct({ ...newProduct, price: text });
              setPriceError('');
            }}
          />
          {priceError ? <Text style={{ color: 'red' }}>{priceError}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Sklep"
            value={newProduct.store}
            onChangeText={(text) => setNewProduct({ ...newProduct, store: text })}
          />
          <Button title="Dodaj" onPress={addProduct} />
          <Button title="Anuluj" onPress={() => {
            setModalVisible(false);
            setPriceError('');
          }} />
        </View>
      </Modal>

      <Modal visible={filterModalVisible} animationType="slide">
        <View style={styles.modal}>
          <FilterBar
            filterStore={filterStore}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onFilterStore={setFilterStore}
            onMinPrice={setMinPrice}
            onMaxPrice={setMaxPrice}
          />
          <View style={styles.filterButtonsContainer}>
            <Button title="Zastosuj filtry" onPress={() => setFilterModalVisible(false)} />
            <View style={{ height: 20 }} /> 
            <Button title="Resetuj filtry" color="red" onPress={resetFilters} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
