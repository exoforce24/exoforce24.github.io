(function(window, undefined) {
  var dictionary = {
    "237fc89b-8f23-466c-aff3-f4cb11b0374e": "profileMgmt",
    "999c0e0d-5c15-4aa9-9b59-3b435b187b37": "statisticBooked",
    "b7f96204-756f-4c3f-967a-0792f590487c": "contacts",
    "61c9bbd7-be56-4ef7-8c25-a83bebad92df": "bacTestv2",
    "919235e5-4822-488f-a9d1-6c03e2c7ce16": "bacTestv1",
    "9c2828c0-c16c-4749-8ec3-4da9248f2b96": "callValet",
    "76d8aba9-8730-4e67-9bcb-1fe202aca34a": "registration",
    "e77bd7a6-6c15-4022-bf5c-280fe72d813e": "emergencyManage2",
    "416225be-3e12-4d45-a54a-28d915daa06d": "emergencyManage",
    "77d15ba5-1d5e-4db6-bc33-ef0f335c231e": "statistic",
    "324a752d-f5a1-42ad-9362-8aa7b02c2bbe": "valetCheck",
    "b8f9b616-51a2-4d6a-a028-69386cd49e59": "blowOrSpeech",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "signIn",
    "41c262cf-1c54-407a-8d90-4be1dd90bd7b": "valetCheck4",
    "f2f53706-7220-4f61-90b9-1a827e7c9ea7": "valetCheck3",
    "f7f5a7fa-dcfc-44ec-ad57-feb243926acb": "emergency",
    "338ba080-e40b-43ad-aee1-8cb5c4793132": "valetCheck2",
    "caa8bd89-e060-4c69-ae70-7280e5aee347": "speech",
    "4d6f0de6-242c-4194-b1ad-9afa637f0e86": "termsAndCondition",
    "ec06da62-88ef-4b50-a496-687d9f02b600": "forgetPassword",
    "026cf5ab-b373-420c-9071-5e9570afea95": "valet",
    "5c3ad1f7-b0d2-41f8-b0d6-8f3225102d9e": "valetConfirm",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);