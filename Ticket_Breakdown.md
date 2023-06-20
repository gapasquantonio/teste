# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Ticket 1:

Acceptance Criteria:

- Add a new field called "Custom Id" to the Agents table in the database.
- Create a form in the frontend that allows Facility users to add/edit the custom ID for each Agent.
- Update the backend endpoints to handle the new "Custom Id" field in the Agents resource.
- Modify the backend functions responsible for creating/updating Shifts to use the Custom ID when assigning an Agent to a Shift, if it exists.
- Update the report generation function to use the Custom ID instead of the internal ID.
Estimated Time: 3-5 days

Implementation Details:

To fulfill the requirements mentioned in the ticket, the following steps should be taken:

Database Migration:

Perform a database migration to add a new field called "Custom Id" to the Agents table. This can be achieved by running the necessary SQL migration script or using an ORM tool's migration feature.

Frontend Implementation:

Create a form in the frontend application that allows Facility users to add or edit the custom ID for each Agent. The form should retrieve the existing Agents' data and display the custom ID field for editing purposes.
Implement validation to ensure the uniqueness of custom IDs, if required.
Upon submission of the form, make an API call to the corresponding backend endpoint to update the custom ID for the Agent.

Backend API Endpoints:

Add/update REST API endpoints for the Agents resource to handle the new "Custom Id" field.
Implement an endpoint to retrieve the list of Agents with their respective custom IDs.
Implement an endpoint to update the custom ID for a specific Agent.
Ensure proper input validation and handle potential error cases, such as duplicate custom IDs or invalid Agent IDs.
Shift Management:

Update the backend functions responsible for creating and updating Shifts to use the custom ID instead of the internal ID when assigning an Agent to a Shift, if a custom ID exists for the Agent.
Ensure that the custom ID is properly linked to the corresponding Agent during Shift assignment.

Report Generation:

Modify the report generation function to use the custom ID instead of the internal ID when generating reports.
Update the report templates or logic to reflect the changes and display the custom IDs in the generated reports.
Remember to follow best practices for REST API security, such as using TLS for secure communication. Additionally, consider the API design pattern that best suits your scenario when defining endpoint structures for managing current users or IDs.

Once the implementation is completed, ensure thorough testing to verify the functionality of the added features and to handle any potential edge cases or errors. The estimated time for this task is 3-5 days.



Ticket 2:

As a Facility user, you should be able to see the custom ID of each Agent assigned to a Shift so that you can verify if your custom IDs are correct. To fulfill this requirement, the following implementation details need to be addressed:

Update the getShiftsByFacility API endpoint:

Modify the API response of the getShiftsByFacility endpoint to include the Custom ID of each Agent assigned to a Shift. This can be done by retrieving the Custom ID information from the database or any other relevant data source and including it in the response payload.
Update the Shift list view and individual Shift detail view in the frontend:

Modify the Shift list view to display the Custom ID of each Agent assigned to a Shift. This can be achieved by enhancing the user interface (UI) elements to show the Custom ID alongside other Shift details.
Update the individual Shift detail view to also include the Custom ID information. This will provide a more detailed view of each Shift, allowing Facility users to easily verify the Custom IDs associated with Agents.
By implementing the above changes, Facility users will have access to the Custom ID of each Agent assigned to a Shift through the API response and the frontend views.












Ticket 3:
As a Facility user, I should be able to search for a Shift by the custom id of the Agent assigned to it so that I can quickly find particular records.

Acceptance Criteria:

The frontend should have a search bar where the Facility users can enter a custom id.
The API should allow searching for Shifts by the Custom Id of the Agent assigned to it.
The frontend should display the filtered Shifts that match the search term.
To fulfill this ticket, the following implementation details can be considered:

Frontend:

Add a search bar to the Shift list view in the frontend. This search bar should allow Facility users to enter the custom id.
Implement functionality to capture the search term entered by the user.
Make an API request to retrieve Shifts based on the custom id entered in the search bar.
Display the filtered Shifts that match the search term in the frontend Shift list view.
API:

Update the getShiftsByFacility API endpoint to allow filtering by the Custom Id of the Agent assigned to the Shift.
Modify the API endpoint to accept a query parameter for the custom id search term.
Implement the necessary logic in the backend to filter the Shifts based on the custom id.
Return the filtered Shifts as the API response.
By implementing the above changes, Facility users will be able to search for Shifts using the custom id of the Agent assigned to them. The search functionality will provide a quick way to find specific records.




















Ticket 4:
As a Facility admin, I want to be able to remove or update the custom id of an Agent so that I have control over how they are identified.

Acceptance Criteria:

The frontend should allow editing/removing the Custom Id field for each Agent.
Backend endpoints should be updated to handle removing/updating the Custom Id field.
If the Custom Id of an Agent is removed, their shifts should use the internal id instead when generating reports.

Estimated time: 2-3 days

Implementation details:

To fulfill this ticket, the following steps need to be taken:

Frontend Changes:

Update the Agents list view in the frontend to include the ability to edit/remove the Custom Id field for each Agent. This will allow the Facility admin to modify or delete the custom id as needed.

Backend API Endpoints:

Update the REST API endpoints related to the Agents resource to handle the removal and updating of the Custom Id field. This will involve modifying the backend logic to process the requests for removing or updating the custom id.
Shift Creation/Update:

Modify the backend functions responsible for creating and updating Shifts to handle scenarios where an Agent's Custom Id is removed. If the Custom Id is removed, the system should use the internal id of the Agent instead when generating reports or processing shifts.
Report Generation:

Update the report generation function in the backend to use the Custom Id if it exists for an Agent. However, if the Agent's Custom Id is removed, the function should fallback to using the internal id for generating reports. This ensures that the reports remain accurate and consistent even when the Custom Id is removed.
By implementing these changes, the Facility admin will have the desired control over how Agents are identified. They can edit or remove the Custom Id as needed, and the system will handle the generation of reports accordingly.

Please note that the estimated time for completing this ticket is 2-3 days, but it may vary depending on the complexity of the existing system and the specific technologies used for frontend and backend development.




