import { MEMBERS } from "./db-data";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA12rDvKiY-yD696kEzHfHtQ4a-MnJ-a9M",
  authDomain: "test-lunch-box1.firebaseapp.com",
  databaseURL: "https://test-lunch-box1.firebaseio.com",
  projectId: "test-lunch-box1",
  storageBucket: "test-lunch-box1.appspot.com",
  messagingSenderId: "687006873527",
  appId: "1:687006873527:web:f86704d772aed885"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

console.log("Uploading data to the database with the following config:\n");

console.log(JSON.stringify(firebaseConfig));

console.log(
  "\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n"
);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const settings = { timestampsInSnapshots: true };

db.settings(settings);

async function uploadData() {
  var batch = db.batch();

  const member = db.collection("member");

  Object.values(MEMBERS)
    .sort((c1: any, c2: any) => c1.seqNo - c2.seqNo)
    .forEach(async (m: any) => {
      const newCourse = removeId(m);

  //await member.add(newCourse);

      // const lessons = courseRef.collection("lessons");

      // const courseLessons = findLessonsForCourse(m.id);

      //console.log(`Adding ${courseLessons.length} lessons to ${course.description}`);

      // courseLessons.forEach(async lesson => {
      //   const newLesson = removeId(lesson);

      //   await lessons.add(newLesson);
      // });
    });

  return batch.commit();
}

function removeId(data: any) {
  const newData: any = { ...data };

  delete newData.id;

  return newData;
}

/* uploadData()
  .then(() => {
    console.log("Writing data, exiting in 10 seconds ...\n\n");

    setTimeout(() => {
      console.log("\n\n\nData Upload Completed.\n\n\n");
      process.exit(0);
    }, 10000);
  })
  .catch(err => {
    console.log("Data upload failed, reason:", err, "\n\n\n");
    process.exit(-1);
  }); */
