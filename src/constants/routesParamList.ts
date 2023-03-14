import Routes from './routes';

interface DetailParams {
  id: number;
}

export type RoutesParamList = {
  [Routes.Home]: undefined;
  [Routes.Detail]: DetailParams | undefined;
};
