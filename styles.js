const React = require('react-native')
const { StyleSheet } = React
const constants = {
  tintColor: '#157EFB',
};

var styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 20,
  },
  actionText: {
    color: constants.tintColor,
    fontSize: 16,
    textAlign: 'left',
  },
  sectionHeader: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 4,
  },
  sectionHeaderText: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 13,
    color: '#6D6D72',
  },
  sectionFooter: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  sectionFooterText: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 13,
    color: '#6D6D72',
  },
  sectionContainer: {
    backgroundColor: 'white',
    padding: 8,
  },
  horizontalStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: '#E4E3E5',
    height: 1,
  },
  textInput: {
    height: 25,
  },
  text: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    color: 'black',
  },
  scrollView: {
    backgroundColor: '#EFEFF4',
  }
})

module.exports = styles
module.exports.constants = constants;
