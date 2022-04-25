const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  image: {
    borderRadius: 10,
    height: 200,
  },
  avatar: {
    height: 130,
    width: 130,
    borderRadius: 75,
    marginTop: 100,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 50,
  },
  profileText: {
    fontSize: 20,
  },
  profileButton: {
    paddingBottom: 20,
  },
});

export default styles;
