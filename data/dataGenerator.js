import realm from './realm/realm'
import users from './raw/users'

function truncate() {
  realm.write(() => {
    realm.delete(realm.objects('User'));
    realm.delete(realm.objects('Version'));
  });
}

function populateUsers() {
  for (let user of users) {
    let images = user.images;
    user.images = [];
    realm.write(() => {
      let created = realm.create('User', user);
      for (let i of images)
        created.images.push({id: i});
    });
  }
}

function populateNotifications() {
  for (let notification of notifications) {
    let userId = notifications.indexOf(notification) % users.length;
    notification.user = realm.objects('User')[userId];
    realm.write(() => {
      realm.create('Notification', notification)
    })
  }
}

function populateVersion() {
  realm.write(() => {
    realm.create('Version', {id: 0})
  })
}

let populate = () => {
  let version = realm.objects('Version');
  if (version && version.length > 0)
    return;

  //truncate();
  populateVersion();
  populateUsers();
  populateArticles();
  populateNotifications();
  populateConversations();
  populateCards();
};

export default populate
