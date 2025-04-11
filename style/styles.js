import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fff',  
    paddingVertical: 6,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 8,
    marginTop: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 5,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  bought: {
    fontSize: 16,
    fontWeight: '600',
    color: 'green',
    
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  modal: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  
});
