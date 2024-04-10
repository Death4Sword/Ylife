import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    mainEventContainer: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    sectionTopEventContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    imageEvent: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginRight: 20,
    },
    sectionTitleEventContainer: {
      alignItems: 'center',
    },
    sectionTitleEvent: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
    },
    sectionTitledate: {
      fontSize: 16,
      fontWeight: 'normal',
      textAlign: 'center',
      marginBottom: 10,
    },
    sectionDivider: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginVertical: 20,
    },
    sectionTitleLieu: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    sectionLieu: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    sectionTitleTarif: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    sectionTarif: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    sectionTitleContact: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    sectionContact: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    sectionAPropos: {
      marginBottom: 20,
    },
    sectionTitleAPropos: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    sectionDescription: {
      fontSize: 16,
      fontWeight: 'normal',
      marginBottom: 10,
      lineHeight: 24,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginRight: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
    

export default style;
