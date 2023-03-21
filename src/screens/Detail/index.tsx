import React, { useEffect, useState } from 'react';
import { Text, TextInput, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { addTask, editTask } from 'src/slices/currentListSlice';
import type { RootState } from 'src/store';
import { formatText } from 'utils/stringUtils';
import CustomButton from 'components/CustomButton';

import { RoutesParamList } from 'constants/routesParamList';

import styles from './styles';

function TaskDetail() {
  const tasks = useSelector((state: RootState) => state.tasks.currentList);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParamList>>();
  const { params } = useRoute<RouteProp<RoutesParamList>>();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (params?.id) {
      const task = tasks.find(({ id }) => id === params.id);
      setName(task!.name);
      setDescription(task?.description || '');
    }
  }, [params, tasks]);

  const onSubmit = () => {
    if (name) {
      if (params?.id) {
        dispatch(editTask({ id: params.id, name: formatText(name), description }));
      } else {
        dispatch(
          addTask({
            id: tasks.length !== 0 ? tasks.at(-1)!.id + 1 : 1,
            name: formatText(name),
            description,
            completed: false
          })
        );
      }
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Text style={styles.title}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          maxLength={30}
          accessibilityLabel="name input"
        />
      </>

      <>
        <Text style={styles.title}>Description (optional)</Text>
        <TextInput
          style={styles.largeInput}
          onChangeText={setDescription}
          value={description}
          maxLength={120}
          multiline
        />
      </>

      <CustomButton name={params?.id ? 'Save' : 'Add Task'} onSubmit={onSubmit} />
    </SafeAreaView>
  );
}

export default TaskDetail;
