import Notifications from './collection.js';

// will be common to all other view unless specific properties are overwritten
Notifications.addDefaultView(function (terms) {
  return {
    options: {limit: 1000}
  };
});

// notifications for a specific user (what you see in the notifications menu)
Notifications.addView("userNotifications", function (terms) {
  if (!!terms.type) {
    return {
      selector: {
        userId: terms.userId,
        type: terms.type,
      },
      options: {sort: {createdAt: -1}}
    };
  } else {
    return {
      selector: {userId: terms.userId},
      options: {sort: {createdAt: -1}}
    };
  }
});
