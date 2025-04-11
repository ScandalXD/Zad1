import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../style/styles';

const FilterBar = ({ filterStore, minPrice, maxPrice, onFilterStore, onMinPrice, onMaxPrice }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Filtruj po sklepie"
        value={filterStore}
        onChangeText={onFilterStore}
      />
      <TextInput
        style={styles.input}
        placeholder="Minimalna cena"
        value={minPrice}
        onChangeText={onMinPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Maksymalna cena"
        value={maxPrice}
        onChangeText={onMaxPrice}
        keyboardType="numeric"
      />
    </View>
  );
};

export default FilterBar;
