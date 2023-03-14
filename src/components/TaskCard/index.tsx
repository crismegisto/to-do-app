import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';
import { Task } from 'interfaces/task';
import { editTask, removeTask } from 'src/slices/currentListSlice';
import trashIcon from 'assets/trash.png';

import { RoutesParamList } from 'constants/routesParamList';
import Routes from 'constants/routes';

import styles from './styles';

function TaskCard({ id, name, completed }: Task) {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <CheckBox value={completed} onValueChange={() => dispatch(editTask(id))} />
      </View>
      <TouchableOpacity style={styles.touchEdit} onPress={() => navigation.navigate(Routes.Detail, { id })}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(removeTask(id))}>
        <Image source={trashIcon} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default TaskCard;
