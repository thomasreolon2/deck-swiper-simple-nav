import React from 'react';
import { Button, StyleSheet, View, Slider } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Alert
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';


export function DrawerContent(props) {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const SwitchName = () => {

    this.setState({ SwitchName: 'Random' })
  }
  const onToggleSwitch = () => {

    setIsDarkTheme(!isDarkTheme);
    if (setIsDarkTheme) {
      return <SwitchName></SwitchName>
    }

  }


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    'https://scontent.fnvt1-1.fna.fbcdn.net/v/t1.0-9/100839348_1880379065430577_5308600421332287488_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeFnQSL52AVDg5Wun7zlHr9LWCu8gUlH5t1YK7yBSUfm3UDzdWBx1kRFUu0jvluHdZ_Z5hG8NV3jhNX-zPzyZwtE&_nc_ohc=wMqpCdU3NGQAX8iLCN9&_nc_ht=scontent.fnvt1-1.fna&oh=bc613d24c2342e36fe80646504403780&oe=5F2DED94',
                }}
                size={70}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={(fontSize = 7)}>Thomas Reolon</Title>
                <Caption>Hi people, thom here...</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  4.6/✡✡✡✡✡
                </Paragraph>
                <Caption style={styles.caption}> </Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  6
                </Paragraph>
                <Caption style={styles.caption}> Exchanges</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSec}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon2 name="md-bookmarks" color={color} size={22} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('BookMarks');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="clipboard" color={color} size={size} />
              )}
              label="History"
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="database-search" color={color} size={size} />
              )}
              label="Search"
              onPress={() => {
                props.navigation.navigate('SearchStack');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Settings"
              onPress={() => { }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple
              onpress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Random Items</Text>
                <Switch value={isDarkTheme} onValueChange={onToggleSwitch} />
              </View>
            </TouchableRipple>

          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => { }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

});
