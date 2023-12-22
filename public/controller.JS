app.controller('RegistrationController', function ($scope, $http) {
  $scope.students = [];

  $scope.submit = function () {
    if ($scope.registrationForm.$valid) {
      // ... Your existing validation code ...

      // Assuming your server is running on the same machine, otherwise, change the URL accordingly
      $http.post('http://localhost:3080/submit', {
        name: $scope.name,
        age: $scope.age,
        gender: $scope.gender,
        dob: $scope.dob,
        number: $scope.number,
        gmail: $scope.gmail
      }).then(function (response) {
        alert(response.data);
      }).catch(function (error) {
        console.error(error);
        alert("Error submitting form. Please try again.");
      });

      

    } else {
      alert("Please, Fill All Details and SUBMIT Form");
    }
  };
});
