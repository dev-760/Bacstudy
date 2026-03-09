export type NationalExam = {
  year: string;
  session: 'Regular' | 'Makeup';
  examUrl: string;
  correctionUrl: string | null;
};

export const nationalExams: Record<string, NationalExam[]> = {
  "english": [
    {
      "year": "2023",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-اللغة-الانجليزية-2022-مسلك-علوم-انسانية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2023",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-اللغة-الانجليزية-2022-مسلك-علوم-انسانية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-اللغة-الإنجليزية-2020-مسلك-علمي-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-اللغة-الإنجليزية-2019-مسلك-علمي-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2017",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2017/11/الامتحان-الوطني-في-اللغة-الإنجليزية-2023-مسلك-علمي-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2017",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2017/11/الامتحان-الوطني-في-اللغة-الإنجليزية-2023-مسلك-علمي-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    }
  ],
  "philosophy": [
    {
      "year": "2023",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-الفلسفة-2022-مسلك-العلوم-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2023",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-الفلسفة-2022-مسلك-العلوم-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/11/الامتحان-الوطني-في-الفلسفة-2021-مسلك-العلوم-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/11/الامتحان-الوطني-في-الفلسفة-2021-مسلك-العلوم-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2017",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2017/11/الامتحان-الوطني-مادة-الفلسفة-2023-مسالك-علمية-د.العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2017",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2017/11/الامتحان-الوطني-مادة-الفلسفة-2023-مسالك-علمية-د.الاستدراكية.pdf",
      "correctionUrl": null
    }
  ],
  "math": [
    {
      "year": "2023",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-الرياضيات-خيار-انجليزية-2022-مسلك-علوم-الحياة-والارض-خيار-انجليزية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2023",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-الرياضيات-خيار-انجليزية-2022-مسلك-علوم-الحياة-والارض-خيار-انجليزية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-الرياضيات-خيار-انجليزية-2021-مسلك-علوم-الحياة-والارض-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-الرياضيات-خيار-انجليزية-2021-مسلك-علوم-الحياة-والارض-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2020",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2020/02/الامتحان-الوطني-في-مادة-الرياضيات-2024-مسلك-علوم-رياضية-خيار-إنجليزية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2020",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2020/02/الامتحان-الوطني-في-مادة-الرياضيات-2024-مسلك-علوم-رياضية-خيار-إنجليزية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    }
  ],
  "svt": [
    {
      "year": "2023",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-علوم-الحياة-والارض-خيار-انجليزية-2021-مسلك-علوم-فيزيائية-خيار-انجليزية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2023",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-علوم-الحياة-والارض-خيار-انجليزية-2021-مسلك-علوم-فيزيائية-خيار-انجليزية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-الفيزياء-والكيمياء-خيار-انجليزية-2020-مسلك-علوم-فيزيائية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-الفيزياء-والكيمياء-خيار-انجليزية-2019-مسلك-علوم-فيزيائية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    }
  ],
  "pc": [
    {
      "year": "2023",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-الفيزياء-والكيمياء-خيار-انجليزية-2022-مسلك-علوم-فيزيائية-خيار-انجليزية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2023",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2023/05/الامتحان-الوطني-في-الفيزياء-والكيمياء-خيار-انجليزية-2022-مسلك-علوم-فيزيائية-خيار-انجليزية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-الفيزياء-والكيمياء-خيار-انجليزية-2021-مسلك-علوم-فيزيائية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2022",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2022/04/الامتحان-الوطني-في-الفيزياء-والكيمياء-خيار-انجليزية-2021-مسلك-علوم-فيزيائية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2020",
      "session": "Regular",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2020/02/الامتحان-الوطني-في-مادة-الفيزياء-و-الكيمياء-2024-مسلك-علوم-رياضية-خيار-إنجليزية-الدورة-العادية.pdf",
      "correctionUrl": null
    },
    {
      "year": "2020",
      "session": "Makeup",
      "examUrl": "https://moutamadris.ma/wp-content/uploads/2020/02/الامتحان-الوطني-في-مادة-الفيزياء-و-الكيمياء-2024-مسلك-علوم-رياضية-خيار-إنجليزية-الدورة-الاستدراكية.pdf",
      "correctionUrl": null
    }
  ]
};
