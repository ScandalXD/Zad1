import React from 'react';
import { SectionList, View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../style/styles';

const ShoppingList = ({ products, onDelete, onToggleBought }) => {
  const sectionData = [
    {
      title: 'Do kupienia',
      data: products.filter(p => !p.bought),
    },
    {
      title: 'Kupione',
      data: products.filter(p => p.bought),
    },
  ];

  return (
    <SectionList
      sections={sectionData}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item }) => {
        const index = products.findIndex(
          p => p.name === item.name &&
               p.store === item.store &&
               p.price === item.price
        );

        return (
          <View style={styles.item}>
            <View style={styles.itemRow}>
              <TouchableOpacity onPress={() => onToggleBought(index)}>
                <Text style={item.bought ? styles.bought : styles.name}>{item.name}</Text>
                <Text style={styles.details}>{item.price} zł - {item.store}</Text>
              </TouchableOpacity>
              <Button title="Usuń" onPress={() => onDelete(index)} />
            </View>
          </View>
        );
      }}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.headerContainer}>
          <Text style={styles.sectionHeader}>{title}</Text>
        </View>
      )}
      stickySectionHeadersEnabled={true}
    />
  );
};

export default ShoppingList;
