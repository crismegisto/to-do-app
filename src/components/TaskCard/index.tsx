import React from 'react';
import { TouchableOpacity, Text, View, Image, FlatList, ListRenderItem } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';
import { Task } from 'interfaces/task';
import { editTask, removeTask } from 'src/slices/currentListSlice';
import trashIcon from 'assets/trash.png';
import { ListKeyExtractor } from 'interfaces/global';

import { RoutesParamList } from 'constants/routesParamList';
import Routes from 'constants/routes';

import styles from './styles';

function TaskCard({ id, name, completed, labels }: Task) {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParamList>>();

  const renderItem: ListRenderItem<string> = ({ item }) => <Text>{item}</Text>;

  const keyExtractor: ListKeyExtractor<string> = (_, index) => String(id + index);
  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <CheckBox value={completed} onValueChange={() => dispatch(editTask(id))} testID="checkBox" />
      </View>
      <TouchableOpacity style={styles.touchEdit} onPress={() => navigation.navigate(Routes.Detail, { id })}>
        <Text style={styles.text} testID="name-list">
          {name}
        </Text>

        <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={labels || []} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(removeTask(id))} testID="deleteButton">
        <Image source={trashIcon} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default TaskCard;
