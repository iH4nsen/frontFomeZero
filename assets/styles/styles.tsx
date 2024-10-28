import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const scaleFont = (size: number) => (width / 375) * size;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,  // Padding horizontal responsivo
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  quoteText: {
    color: '#DFA436',
    fontSize: scaleFont(18),  // Fonte escalada
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: '#1B3252',
    fontWeight: 'bold',
    fontSize: scaleFont(16),  // Fonte escalada
  },
  button: {
    borderRadius: 8, 
    backgroundColor: 'white',
    paddingVertical: height * 0.01, 
    paddingHorizontal: width * 0.8,
    width: width * 0.8,
  },  
  partnerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scaleFont(16),  // Fonte escalada
    marginLeft: width * 0.02,
    marginVertical: height * 0.01,
  },
  header: {
    backgroundColor: '#1B3252',
    padding: width * 0.025,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: height * 0.25,  // Altura escalada
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  backButton: {
    padding: width * 0.02,
    backgroundColor: 'white',
    borderRadius: 8,
    color: '#1B3252',
    alignSelf: 'flex-start',
  },
  filterButton: {
    alignSelf: 'flex-end',
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
    margin: width * 0.02,
  },
  cardMarkett: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: height * 0.28, 
    width: width * 0.32,  
  },
  cardImage: {
    height: height * 0.2, 
    width: width * 0.3, 
    resizeMode: 'cover',
    margin: 8
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#1B3252',
    fontSize: scaleFont(16),
  },
  badge: {
    backgroundColor: '#1B3252',
    borderRadius: 50,
    paddingHorizontal: width * 0.02,
    minWidth: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: height * 0.01,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: scaleFont(12),  // Fonte escalada
  },
  textCard: {
    fontSize: scaleFont(12),
    color: '#5a5966',
  },
  progress: {
    marginBottom: height * 0.02,
  },
  buttonNext: {
    backgroundColor: '#1B3252',
    fontSize: scaleFont(14),
  },
  boxThanks: {
    margin: 8,
    backgroundColor: 'white', 
    padding: width * 0.5, 
    borderRadius: 8, 
    elevation: 5
  },
  textThanks: {
    color: '#1B3252', 
    fontSize: scaleFont(12),
    textAlign: 'left'
  },
  OngCardImage: {
    width: width* 0.3
  }, 
  moneyContainer: {
    width: width * 0.8,
    paddingVertical: 10, // Add vertical padding for better spacing
  },
  title:{
    fontSize: scaleFont(26),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 20
    
  },
  text:{
    fontSize: scaleFont(14),
    textAlign: 'justify',
    marginHorizontal: 20,
    marginBottom: 10, 
    color: 'white'
  },
  subtitle:{
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    color: '#DFA436',
    marginHorizontal: 20,

  }
});

export default styles;
