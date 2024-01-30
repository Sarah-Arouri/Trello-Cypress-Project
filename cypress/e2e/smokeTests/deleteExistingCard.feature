Feature:  User Can Delete Existing Card

    Verify That The User Can Delete Existing Card
   
   Scenario: Deleting Card
     Given  Navigate to the Board
     When   Clicks On The Card
     And    Clicks The Archive Button On Actions
     And    Clicks On Delete Button 
     And    Clicks ON Confirm Delete Button 
     Then   The Card Will Be Delete Successfully