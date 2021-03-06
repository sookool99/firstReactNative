'use strict';
import StyleSheet from '../StyleSheet';

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    paddingTop: 50,
  },
  imageContainer: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 101,
  },
  center: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 101,
    width: 73,
  },
  title: {
    fontWeight: 'bold',
  },
});

module.exports = styles;
