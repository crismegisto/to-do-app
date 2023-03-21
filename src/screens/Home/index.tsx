import React, { useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootState } from 'src/store';
import { useSelector } from 'react-redux';
import CustomButton from 'components/CustomButton';
import TaskCard from 'components/TaskCard';
import { Task } from 'interfaces/task';
import { ListKeyExtractor } from 'interfaces/global';
import { filterByLabel } from 'utils/tasksFilters';

import { RoutesParamList } from 'constants/routesParamList';
import Routes from 'constants/routes';

import styles from './styles';

function Home() {
  const LABEL = 'work';
  const [filterTasks, setFilterTasks] = useState<Task[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParamList>>();
  const tasks = useSelector((state: RootState) => state.tasks.currentList);

  useEffect(() => {
    const newTasks = filterByLabel(tasks, LABEL);
    setFilterTasks(newTasks);
  }, [tasks]);

  const renderItem: ListRenderItem<Task> = ({ item }) => <TaskCard {...item} />;

  const keyExtractor: ListKeyExtractor<Task> = ({ id }) => String(id);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={filterTasks}
        extraData={filterTasks}
      />
      <View style={styles.buttonContainer}>
        <CustomButton name="Add Task" onSubmit={() => navigation.navigate(Routes.Detail)} />
      </View>
    </SafeAreaView>
  );
}

export default Home;
