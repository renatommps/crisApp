import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%'
  },
  bottomContainer: {
    flex: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%'
  },
  friendsContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },
  friend: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    minHeight: 100
  },
  friendPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendPositionValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EDC951'
  },
  friendData: {
    flex: 6,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  friendInfo: {
    flexDirection: 'row',
  },
  friendInfoName: {
    fontSize: 13,
    color: '#ffffff'
  },
  friendInfoValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#EDC951'
  },
  friendEmail: {

  },
  friendScore: {

  },
  friendPonctuation: {

  },
  titleText: {
    color: 'white',
    fontSize: 20,
    marginBottom: '4%'
  },
  inputViewEmail: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDC951',
    borderRadius: 15,
    height: 40,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#6C6C6C',
  },
  addBtn: {
    width: '90%',
    backgroundColor: '#EDC951',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 12,
  },
  subscribeText: {
    color: 'white',
  },
});
