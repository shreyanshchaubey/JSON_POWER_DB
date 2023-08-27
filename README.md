
# Project Management Form using JSONpowerDB

It is micro project built using JSONpowerDB to understand basics of this database and its library.

# Benifits of using JsonPowerDB

- Proprietary algorithm for High Performance CRUD operations. Multiple times faster than popular DBMS.
- Serverless support  for faster development - A UI developer can develop complete dynamic application.
- DBMS with built in web / application server and embedded caching makes the performance lightning fast
- Server side Native NoSQL - best query performance.
- In-built support to query on multiple JPDB databases.
- Multi-mode DBMS - Document DB, Key-Value DB, RDBMS support.
- Schema free - easy to develop and maintain.
- Web-services API - Can be used with any programming language that has support for HTTP.
- Enriched by a pluggable API Framework - A developer can develop a pluggable API and plugin into any of our cloud JPDB instance.
- Standardisation of API development framework makes the development process easy, more readable, and less error prone.
- Multiple security layers.

# working
## Step 1: Form Initialization

-Upon loading the page or when any control button is clicked, an initially empty form will be displayed. The cursor will automatically focus on the first input field, which corresponds to the primary key of the dataset. All other fields and buttons on the form will be disabled initially.

## Step 2: Data Entry

-The user begins by entering data into the primary key field. If the entered primary key does not exist in the database, the [Save] and [Reset] buttons become active. The cursor then moves to the next available field, allowing the user to fill in the rest of the form.

-It's important to note that the form won't allow submission if there are empty fields. The user needs to ensure all required fields are filled with valid data.

## Step 3: Saving Data

-Once the user completes filling out the form, they can click the [Save] button. This action stores the entered data into the database. After successful data storage, the process returns to Step 2 for further data entry.

## Step 4: Data Update

-In case the user enters a primary key that matches an existing record in the database, the form displays the existing data associated with that key. The [Update] and [Reset] buttons become active, and the user can make changes to the other form fields while the primary key field remains disabled.

-As before, the form ensures that no fields are left empty before proceeding.

## Step 5: Updating Data

-When the user clicks the [Update] button, the form updates the corresponding data in the database with the newly entered values. After successful updating, the process returns to Step 2 for further interactions.

## Step 6: Resetting the Form

-At any point during data entry or update, the user can click the [Reset] button. This action reverts the form to its initial state in Step 2, with the cursor focused on the primary key field.

-By following these steps, users can effectively interact with the dynamic data entry form, either by adding new records or updating existing ones, while ensuring data accuracy and completeness at all times.

# Demo
![image](https://github.com/shreyanshchaubey/JSON_POWER_DB/assets/135205568/f1f24f11-e91c-444e-ba5e-170be86d7fe3)

![image](https://github.com/shreyanshchaubey/JSON_POWER_DB/assets/135205568/95d81cbe-e6fa-482a-a01e-b41b9a75e206)

![image](https://github.com/shreyanshchaubey/JSON_POWER_DB/assets/135205568/60d17e19-7e35-4abc-8077-ca0b348da695)

![image](https://github.com/shreyanshchaubey/JSON_POWER_DB/assets/135205568/aacd2454-9f5b-47cd-a2a7-abec310fd0bd)

# Release History

## version 1.0.0
- First proper release.
- Performs few basic CRUD operations.

# Resources
- https://login2explore.com/jpdb/docs.html
- http://api.login2explore.com:5577/user/dashboard.html





