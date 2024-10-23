import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quoteText: {
    color: '#DFA436',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: '#5C0C9F',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'white',
  },
  partnerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
    marginVertical: 8, 
  },
  header: {
    backgroundColor: '#5C0C9F',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 200,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  backButton: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    color: '#5C0C9F',
    alignSelf: 'flex-start'
  },
  filterButton: {
    alignSelf: 'flex-end'
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    margin: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#5C0C9F',
  },
  badge: {
    backgroundColor: '#5C0C9F',
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 8,
    minWidth: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '500',
  },
  textCard: {
    fontSize: 12,
    color: '#5a5966'
  },
  progress: {
    marginBottom: 8
  }
});

export default styles;
