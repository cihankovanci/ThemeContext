import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

type DropdownDataItemProps = {
  label: string;
  value: string;
};

type DropdownProps = {
  placeholer: string;
  value: DropdownDataItemProps;
  data: Array<DropdownDataItemProps>;
  onSelect: (value: DropdownDataItemProps) => void;
};

const Dropdown: FC<DropdownProps> = props => {
  const [modalShow, setModalShow] = useState(false);

  const handleSelectItem = (item: DropdownDataItemProps) => {
    setModalShow(false);
    props.onSelect(item);
  };

  const handleButtonClick = () => {
    setModalShow(true);
  };

  const RenderListItem = ({item}: {item: DropdownDataItemProps}) => {
    return (
      <TouchableOpacity
        key={item.label}
        onPress={() => handleSelectItem(item)}
        style={[
          styles.listItem,
          {
            backgroundColor:
              item.value === props.value?.value ? '#9AC8CD' : '#E1F7F5',
          },
        ]}>
        <Text style={styles.listItemLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text
          style={[
            styles.buttonTitle,
            !!props.value?.label === false && {color: '#646464'},
          ]}>
          {props.value?.label ? props.value?.label : props?.placeholer}
        </Text>
      </TouchableOpacity>
      <Modal visible={modalShow} animationType="slide">
        <SafeAreaView style={{flex: 1}}>
          <Text style={styles.modalTitle}>{props.placeholer}</Text>
          <FlatList
            style={{flex: 1}}
            data={props.data || []}
            renderItem={RenderListItem}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: width * 0.15,
    backgroundColor: '#dfdfdf',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  listItem: {
    width: '100%',
    height: width * 0.15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  listItemLabel: {
    fontSize: width * 0.035,
    fontWeight: '400',
    color: '#000',
    paddingLeft: 15,
  },
  modalTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
});
export default Dropdown;
