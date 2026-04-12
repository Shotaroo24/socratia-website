export const BUNNY_LIBRARY_ID = "636189";

export type Lesson = {
  id: string;
  title: string;
  videoId: string;
  duration: string;
};

export const sections = [
  {
    id: "standard",
    title: "Standard Lesson",
    lessons: [
      { id: "sta-01", title: "Lesson 1 (Hiragana Part 1)", videoId: "612e71e4-6b43-4851-98eb-56cdff8afba7", duration: "24:04" },
      { id: "sta-02", title: "Lesson 1 (Hiragana Part 2)", videoId: "af79ce69-063a-448f-8d73-626b40382375", duration: "21:00" },
      { id: "sta-03", title: "Lesson 1 (Hiragana Homework)", videoId: "0a2c0ed3-435a-4947-bb2d-97f8394e87e4", duration: "14:49" },
      { id: "sta-04", title: "Lesson 1 (Katakana Part 1)", videoId: "0fee7b5c-e94a-4062-bc45-351c0a06a083", duration: "22:12" },
      { id: "sta-05", title: "Lesson 1 (Katakana Homework)", videoId: "463d0668-a0bc-40ae-b427-ec9f83de4aa4", duration: "14:33" },
      { id: "sta-06", title: "Lesson 2 (Phrase 1)", videoId: "efa37beb-4927-4daf-ab13-ce1f697fbfca", duration: "15:41" },
      { id: "sta-07", title: "Lesson 2 (Phrase 2)", videoId: "df845744-65a9-4aed-affe-d8871e54aa73", duration: "15:36" },
      { id: "sta-08", title: "Lesson 2 (Homework)", videoId: "2e3e6e04-17eb-4739-b8ae-2e38d9fc1b1f", duration: "9:48" },
      { id: "sta-09", title: "Lesson 3 (Phrase 1)", videoId: "8ab0f774-42b6-4b6a-8871-0f5062522298", duration: "17:32" },
      { id: "sta-10", title: "Lesson 3 (Phrase 2)", videoId: "f1a8edb6-8b47-47cc-b1d6-abe3185a05d1", duration: "15:29" },
      { id: "sta-11", title: "Lesson 3 (Homework)", videoId: "ad065d5f-eebb-4913-918c-856e630513df", duration: "10:21" },
      { id: "sta-12", title: "Lesson 4 (Phrase 1)", videoId: "9f788c0d-a851-4f29-a13b-526b894b031b", duration: "14:16" },
      { id: "sta-13", title: "Lesson 4 (Phrase 2)", videoId: "3fa7f3a0-8f3f-4fb2-9067-7b4e49e032c7", duration: "14:54" },
      { id: "sta-14", title: "Lesson 4 (Homework)", videoId: "623c7470-acad-41f9-b07c-c3ce25c64610", duration: "10:16" },
      { id: "sta-15", title: "Lesson 5 (Phrase 1)", videoId: "f8d0b503-3940-4eff-b604-b78c89d4f856", duration: "17:25" },
      { id: "sta-16", title: "Lesson 5 (Phrase 2)", videoId: "5e78afdc-57c7-4bcc-99df-cb1be3d1845d", duration: "20:17" },
      { id: "sta-17", title: "Lesson 5 (Homework)", videoId: "aa0a9a3f-ca57-44b4-bb1d-167eb2c3d732", duration: "9:04" },
      { id: "sta-18", title: "Lesson 6 (Part 1)", videoId: "814bb18a-abdd-49c9-903d-721e5f444acd", duration: "15:10" },
      { id: "sta-19", title: "Lesson 6 (Phrase 2)", videoId: "7ff13cbf-8edb-47ba-9ac5-812fe1a2773e", duration: "15:57" },
      { id: "sta-20", title: "Lesson 6 (Homework)", videoId: "e6184ec0-2646-4511-8e6a-53ed418afb16", duration: "9:37" },
      { id: "sta-21", title: "Lesson 7 (Phrase 1)", videoId: "a64f44b2-a7ff-4b39-9e61-b3d7e5e754a2", duration: "13:49" },
      { id: "sta-22", title: "Lesson 7 (Phrase 2)", videoId: "80e99350-a98d-4103-8d59-1e1d637a953a", duration: "13:17" },
      { id: "sta-23", title: "Lesson 7 (Homework)", videoId: "ea6211e0-940e-467a-9f0c-cbd849d77e2f", duration: "8:32" },
      { id: "sta-24", title: "Lesson 8 (Phrase 1)", videoId: "ba4e97d1-c875-416b-9219-3051f02e046f", duration: "15:25" },
      { id: "sta-25", title: "Lesson 8 (Phrase 2)", videoId: "c8b2f4fd-f0db-457e-aaeb-37724cf740e2", duration: "13:11" },
      { id: "sta-26", title: "Lesson 8 (Homework)", videoId: "84f5ea34-bff0-4976-a782-db87dbfdc646", duration: "11:19" },
      { id: "sta-27", title: "Lesson 9 (Phrase 1)", videoId: "54f4a247-a379-4174-b992-35dc48a6a79f", duration: "12:37" },
      { id: "sta-28", title: "Lesson 9 (Phrase 2)", videoId: "b954664b-21ac-4a35-b961-89359e2953a2", duration: "14:15" },
      { id: "sta-29", title: "Lesson 9 (Homework)", videoId: "d3479a56-0415-47f4-9a00-b265d93a3885", duration: "10:55" },
      { id: "sta-30", title: "Lesson 10 (Phrase 1)", videoId: "889028f4-66c7-4775-a8d0-1812e5fb94b3", duration: "7:31" },
      { id: "sta-31", title: "Lesson 10 (Phrase 2)", videoId: "d0f41d24-8532-4265-a466-94e083f7fdd7", duration: "11:37" },
      { id: "sta-32", title: "Lesson 10 (Homework)", videoId: "c2165d51-aea3-4e6e-818d-9de20c988456", duration: "12:47" },
      { id: "sta-33", title: "Lesson 11 (Phrase 1)", videoId: "b332be78-0c40-4128-84ba-0343468513d0", duration: "13:06" },
      { id: "sta-34", title: "Lesson 11 (Phrase 2)", videoId: "279fbe04-b9e7-4249-acae-7ef7003f4eca", duration: "14:08" },
      { id: "sta-35", title: "Lesson 11 (Homework)", videoId: "fdd773f5-7a68-4a9f-a7b0-7881e77d4071", duration: "10:06" },
      { id: "sta-36", title: "Lesson 12 (Phrase 1)", videoId: "ac34ad9e-04f5-43b5-8d35-c8114a7896b4", duration: "12:07" },
      { id: "sta-37", title: "Lesson 12 (Phrase 2)", videoId: "886c072d-2c57-4a03-a3e1-3b4cd9b71625", duration: "15:13" },
      { id: "sta-38", title: "Lesson 12 (Homework)", videoId: "405212d6-e93c-4340-aea0-b853391e022d", duration: "11:01" },
      { id: "sta-39", title: "Lesson 13 (Phrase 1)", videoId: "6285fc08-12db-465c-b41a-0c319085220f", duration: "14:05" },
      { id: "sta-40", title: "Lesson 13 (Phrase 2)", videoId: "f4308cbe-7469-4261-a8f6-4844f239857c", duration: "12:51" },
      { id: "sta-41", title: "Lesson 13 (Homework)", videoId: "bc6eadfc-8998-40dc-aed1-64ebaf500216", duration: "13:17" }
    ]
  },
  {
    id: "conversational",
    title: "Conversational Lesson",
    lessons: [
      { id: "con-01", title: "Lesson 2", videoId: "83ec0efc-9b9d-4efd-bdd0-551587fec667", duration: "14:20" },
      { id: "con-02", title: "Lesson 3", videoId: "6403674b-8c4d-461f-bf24-5fd67ac4e53e", duration: "11:10" },
      { id: "con-03", title: "Lesson 4", videoId: "64cd3053-2188-4bfb-835a-7570937e8197", duration: "11:00" },
      { id: "con-04", title: "Lesson 5", videoId: "bc3bcce0-4114-4cea-8913-08fd12807730", duration: "16:10" },
      { id: "con-05", title: "Lesson 6", videoId: "6849dd31-aa11-421c-8340-edc4dc9971d1", duration: "12:18" },
      { id: "con-06", title: "Lesson 7", videoId: "97bedcf3-7cc8-4be6-9444-7e3e17d02a0c", duration: "7:57" },
      { id: "con-07", title: "Lesson 8", videoId: "724230ff-f2de-49ca-a325-1eee136bb515", duration: "11:26" },
      { id: "con-08", title: "Lesson 9", videoId: "eb5c2821-a74f-42fa-a702-cd22e1e964ff", duration: "8:52" },
      { id: "con-09", title: "Lesson 10", videoId: "97515f4b-48d5-40a2-bb23-e1b663ef90a8", duration: "7:22" },
      { id: "con-10", title: "Lesson 11", videoId: "0a960280-5a29-42b5-a61b-731ad889763e", duration: "8:17" },
      { id: "con-11", title: "Lesson 12", videoId: "53441ffc-a671-440b-be68-979136c6ca73", duration: "9:00" },
      { id: "con-12", title: "Lesson 13", videoId: "ece8d1ee-ec58-4a99-aac9-50c9e9e5a52a", duration: "10:22" }
    ]
  },
  {
    id: "advanced",
    title: "Advanced Grammar",
    lessons: [
      { id: "adv-01", title: "Lesson 1", videoId: "8041b487-3edb-4193-9839-3bf10fcc4c50", duration: "8:44" },
      { id: "adv-02", title: "Lesson 2", videoId: "63ac8cc0-2e8e-46d0-ae7a-07eae25188df", duration: "10:44" },
      { id: "adv-03", title: "Lesson 3 (Part 1)", videoId: "7eddc999-92d7-4aaf-8d28-b838ecfd2a89", duration: "9:01" },
      { id: "adv-04", title: "Lesson 3 (Part 2)", videoId: "c88af49d-1059-45e9-9c96-b8093314c777", duration: "25:26" },
      { id: "adv-05", title: "Lesson 3 (Part 3)", videoId: "ccb3ebee-098d-4ae9-a140-6b355e82172e", duration: "12:02" },
      { id: "adv-06", title: "Lesson 4", videoId: "0e4cef81-5b37-4931-909a-e6a669ad01a3", duration: "3:21" },
      { id: "adv-07", title: "Lesson 5", videoId: "7fe13f11-b27b-4424-90bf-c170bfef6088", duration: "21:41" },
      { id: "adv-08", title: "Lesson 6 (Part 1)", videoId: "d0129f48-bf78-4a15-93d3-fdf8f5e23078", duration: "21:50" },
      { id: "adv-09", title: "Lesson 6 (Part 2)", videoId: "21b0e7e7-4856-4fb8-9eab-ceeb81c129c8", duration: "10:35" },
      { id: "adv-10", title: "Lesson 7", videoId: "bfe6cc18-5249-4c64-8d1a-166286e94419", duration: "9:50" },
      { id: "adv-11", title: "Lesson 8", videoId: "f6840ab3-51a7-44c5-be6c-9c0135194e4a", duration: "5:08" },
      { id: "adv-12", title: "Lesson 9", videoId: "809324e5-f4e9-47e6-9a68-064957209e9a", duration: "8:22" },
      { id: "adv-13", title: "Lesson 10", videoId: "87ebdedb-bbeb-48a6-9af3-ce7ad95ff84d", duration: "10:35" },
      { id: "adv-14", title: "Lesson 11", videoId: "a1fc3824-8130-4658-8c3d-07d23171ede8", duration: "17:02" },
      { id: "adv-15", title: "Lesson 12 (Part 1)", videoId: "96b34b88-8008-44c2-bf43-d8553c672f89", duration: "16:31" },
      { id: "adv-16", title: "Lesson 12 (Part 2)", videoId: "56de16eb-cd9b-4ae6-86d8-c050f1155f9d", duration: "7:50" },
      { id: "adv-17", title: "Lesson 13", videoId: "302131d4-41e4-4119-8558-a577a55f8f9f", duration: "11:39" }
    ]
  },
  {
    id: "words",
    title: "Words Summary",
    lessons: [
      { id: "wor-01", title: "Introduction", videoId: "0c7a82e2-b893-4227-8250-ae9f84442bd9", duration: "7:32" },
      { id: "wor-02", title: "Shopping and Restaurant", videoId: "71a9051d-a84e-4074-a440-c73bebc38721", duration: "2:14" },
      { id: "wor-03", title: "Food and Drink", videoId: "38a7ec18-f611-4307-8f05-369cef749078", duration: "3:13" },
      { id: "wor-04", title: "Words Related to Japan", videoId: "b85725e2-c04b-4774-969b-b3d75b4d28f2", duration: "6:59" },
      { id: "wor-05", title: "Entertainment", videoId: "55245f54-cc52-4e4f-a49a-83b209485d8d", duration: "2:25" },
      { id: "wor-06", title: "Home (Daily necessities)", videoId: "2313b27e-c524-4a85-bad3-5aef0fa5f99d", duration: "4:59" },
      { id: "wor-07", title: "Weather and Nature", videoId: "7ba1405f-e509-4a24-b6eb-3a14df407a30", duration: "2:14" },
      { id: "wor-08", title: "Others", videoId: "71536621-3917-4984-b2d3-1ad170613f13", duration: "3:27" },
      { id: "wor-09", title: "Words Related to Time", videoId: "e0ff889c-3954-4f07-8224-48eb49e4e7cd", duration: "2:07" },
      { id: "wor-10", title: "Words Related to Days and Months", videoId: "43494f7c-032e-4487-bab5-cb6bbd3c7c01", duration: "6:35" },
      { id: "wor-11", title: "Part of Speech", videoId: "d9d0c98d-64cf-4952-a433-1b19340f655a", duration: "12:18" },
      { id: "wor-12", title: "Useful Expression", videoId: "6deacbbb-4c75-4059-bb16-e5fbad3cecb0", duration: "11:15" },
      { id: "wor-13", title: "Other Useful Expression", videoId: "59114692-c3b7-47e6-9046-03964ea02cf8", duration: "5:53" }
    ]
  },
  {
    id: "particle",
    title: "Particle Summary",
    lessons: [
      { id: "par-01", title: "Introduction of Particle", videoId: "2f715ba8-9923-435c-a684-a816a7fc021e", duration: "1:34" },
      { id: "par-02", title: "は (wa)", videoId: "91e47508-a3ac-4199-85ab-230e667bc999", duration: "3:38" },
      { id: "par-03", title: "が (ga)", videoId: "0130f0bf-3404-4a03-a478-bda3e05aa3f9", duration: "6:10" },
      { id: "par-04", title: "の (no)", videoId: "2e8d373b-b9d6-4df1-9173-bf387585000d", duration: "4:35" },
      { id: "par-05", title: "に (ni)", videoId: "bf6e7dfa-cac8-4a88-b4fd-d68fe03da326", duration: "3:04" },
      { id: "par-06", title: "よ (yo)", videoId: "63e7e2a5-e18a-40b4-bc8b-b80c6bc756a2", duration: "2:41" },
      { id: "par-07", title: "で (de)", videoId: "b74a47ae-1bd5-4c22-bf3f-b1e6c73cb01d", duration: "2:04" },
      { id: "par-08", title: "ね (ne)", videoId: "47ce621c-272a-4fc9-92a2-272d1e747571", duration: "2:43" },
      { id: "par-09", title: "を (wo)", videoId: "00d01900-74b4-42d9-899e-5c53f0ef8dec", duration: "3:02" },
      { id: "par-10", title: "も (mo)", videoId: "90769f3f-5183-45ba-86e9-ff565a8a562d", duration: "2:35" },
      { id: "par-11", title: "と (to)", videoId: "b3e3b36e-52f2-4ad3-b44b-3f8a7d3cd8c0", duration: "1:24" },
      { id: "par-12", title: "よ2", videoId: "36377192-a1bf-4a49-8a21-a73046fdff6d", duration: "2:41" }
    ]
  }
];

// Total: 95 videos
// Standard Lesson: 41 videos
// Conversational Lesson: 12 videos
// Advanced Grammar: 17 videos
// Words Summary: 13 videos
// Particle Summary: 12 videos
