import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import i18next, {languageResources} from '../services/i18next';

import {Trans, useTranslation} from 'react-i18next';

import Storage from '../utils/Storage';
import Dropdown from '../component/Dropdown';

const Language = () => {
  const {t} = useTranslation();

  const changeLng = (lng: any) => {
    i18next.changeLanguage(lng);
    Storage.setItem('language', lng);
  };

  const [selectedItem, setSelectedItem] = React.useState({
    label: '',
    value: '',
  });

  const handleSelectItem = (item: any) => {
    changeLng(item.value);
    setSelectedItem(item);
  };

  const newData = Object.keys(languageResources).map((lang, index) => ({
    label: lang,
    value: lang,
  }));

  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {Object.keys(languageResources).map(item => (
          <TouchableOpacity

            style={{
              padding: 10,
              marginHorizontal: 10,
              backgroundColor: 'powderblue',
            }}
            onPress={() => changeLng(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View> */}

      <Text style={styles.text}>{t('hi')}</Text>
      <Text style={styles.text}>{t('bye')}</Text>

      {/* <Button title="Change Language to en" onPress={() => changeLng('en')} />
      <Button title="Change Language to tr" onPress={() => changeLng('tr')} />
      <Button title="Change Language to fr" onPress={() => changeLng('fr')} /> */}

      <Dropdown
        placeholer={t('Please select a language')}
        value={selectedItem}
        data={newData}
        onSelect={handleSelectItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
    marginTop: 50,
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 18,
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
    marginTop: 50,
  },

  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
});

export default Language;
