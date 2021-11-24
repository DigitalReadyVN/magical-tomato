const _ = require('lodash');
const ResponseErrors = {
    ErrorWithDebug: (name, err) => {
        if (ResponseErrors[name]) {
            let rt = _.clone(ResponseErrors[name]);
            rt.debugError = err;
            return rt;
        }

        return err;
    },
    'Unauthorized': {status: 401, name: 'Unauthorized', message: 'Please Login!'},
    'NotFound': {status: 404, name: 'NotFound', message: 'Not found!'},
    'ProviderInUseError': {status:422, name: 'ProviderInUseError', message: 'A User with this email is already connected to an existing stackbit account.'},
    'ProviderIdCannotBeChanged': {status:422, name: 'ProviderIdCannotBeChanged', message: 'Another profile is already connected to this account.'},
    'RegisterEmailTaken': {status: 500, name: 'RegisterEmailTaken', message: 'Email address is already taken.'},
    'RegisterLoggedInError': {status: 403, name: 'RegisterLoggedInError', message: 'Please log out before registering.'},
    'NetlifyTokenExpired': {status: 500, name: 'NetlifyTokenExpired', message: 'Netlify token expired, please connect netlify again.'},
    'NetlifyDomainTaken': {status: 500, name: 'NetlifyDomainTaken', message: 'Netlify domain name is taken, please choose a unique project name.'},
    'NetlifyAPIRateLimit': {status: 500, name: 'NetlifyAPIRateLimit', message: 'Netlify API Rate limit reached. Please try again later.'},
    'UpdatePasswordNewMismatch': {status: 500, name: 'UpdatePassword', message: 'New passwords don\'t match.'},
    'UpdatePasswordError': {status: 500, name: 'UpdatePasswordError', message: 'Something went wrong'},
    'UpdatePasswordIncorrectPasswordError': {status: 500, name: 'UpdatePasswordIncorrectPasswordError', message: 'Password is incorrect.'},
    'ResetPasswordUserNotFound': {status: 400, name: 'ResetPasswordUserNotFound', message: 'User not found'},
    'ResetPasswordForNonEmailUserError': {status: 400, name: 'ResetPasswordForNonEmailUserError', message: 'You can\'t reset password for user registered via 3rd party provider'},
    'DeleteUserError': {status: 500, name: 'DeleteUserError', message: 'Something went wrong'},
    'DeleteUserIncorrectPasswordError': {status: 500, name: 'DeleteUserIncorrectPasswordError', message: 'Password is incorrect.'},
    'DeleteUserIncorrectDisplayName': {status: 500, name: 'DeleteUserIncorrectDisplayNameError', message: 'Account name is incorrect.'},
    'UpdatePreferencesEmpty': {status: 500, name: 'UpdatePreferencesEmpty', message: 'No preferences provided.'},
    'MustAgreeToTOS': {status: 500, name: 'MustAgreeToTOS', message: 'Must agree to terms of service when registering.'},

    'ActionError': ({ message }) => ({ status: 500, name: 'ActionError', message: `Action error occured: ${message}` }),
    'ProjectHasAlreadyBeenBuilt': {status: 422, name: 'ProjectHasAlreadyBeenBuilt', message: 'Project has already been built.'},
    'SanityNotConnected': {status: 500, name: 'SanityNotConnected', message: 'Sanity: Not authenticated, or access token is invalid'},
    'SanityFailedToCreateProject': {status: 500, name: 'SanityFailedToCreateProject', message: 'Sanity: failed to create project'},
    'SanityFailedToCreateStackbitBuildHook': {status: 500, name: 'SanityFailedToCreateStackbitBuildHook', message: 'Sanity: failed to create Stackbit build hook'},
    'DevToNotConnected': {status: 500, name: 'DevToNotConnected', message: 'DevTo: Not authenticated, or access token is invalid'},
    'DevToFailedToCreateProject': {status: 500, name: 'DevToFailedToCreateProject', message: 'DevTo: failed to create project'},
    'DevToFailedToCreateStackbitBuildHook': {status: 500, name: 'DevToFailedToCreateStackbitBuildHook', message: 'DevTo: failed to create Stackbit build hook'},
    'ContentfulNotConnected': {status: 500, name: 'ContentfulNotConnected', message: 'Contentful: Not authenticated, or access token is invalid'},
    'ContentfulExceedPlan': {status: 500, name: 'ContentfulExceedPlan', message: 'Contentful: Exceeding plan limit for space creation'},
    'ContentfulFailedToCreateSpace': {status: 500, name: 'ContentfulFailedToCreateSpace', message: 'Contentful: failed to create space'},
    'ContentfulFailedToCreateStackbitBuildHook': {status: 500, name: 'ContentfulFailedToCreateStackbitBuildHook', message: 'Contentful: failed to create Stackbit build hook'},
    'ContentfulSpaceNotFound': {status: 500, name: 'ContentfulSpaceNotFound', message: 'Contentful: space not found by id'},
    'DatoCMSNotConnected': {status: 500, name: 'DatoCMSNotConnected', message: 'DatoCMS: Not authenticated, or access token is invalid'},
    'DatoCMSFailedToCreateSpace': {status: 500, name: 'DatoCMSFailedToCreateSpace', message: 'DatoCMS: failed to create site'},
    'DatoCMSFailedToCreateStackbitBuildHook': {status: 500, name: 'DatoCMSFailedToCreateStackbitBuildHook', message: 'DatoCMS: failed to create Stackbit build hook'},
    'StackbitFactoryBuildError': {status: 500, name: 'StackbitFactoryBuildError', message: 'Stackbit Factory: Build failed'},
    'StackbitFactoryValidationError': {status: 500, name: 'StackbitFactoryValidationError', message: 'Stackbit Factory: Validation failed'},
    'StackbitFactoryCountModelsError': {status: 500, name: 'StackbitFactoryCountModelsError', message: 'Stackbit Factory: Count Models failed'},
    'GithubUrlNotValid': {status: 500, name: 'GithubUrlNotValid', message: 'Github: repo URL provided is not valid'},
    'GithubRepoNotFound': {status: 404, name: 'GithubRepoNotFound', message: 'Github: repo not found or you do not have permissions to access'},
    'GithubRateLimitReached': {status: 403, name: 'GithubRateLimitReached', message: 'Github: rate limit reached, please try again later'},
    'GithubFailedToCreateRepo': {status: 500, name: 'GithubFailedToCreateRepo', message: 'Github: Failed to create repository'},
    'GithubRepoCreationPermissionDenied': {status: 500, name: 'GithubRepoCreationPermissionDenied', message: 'Github: You do not have access to create repositories on this account.'},
    'GithubRepoNameExists': {status: 500, name: 'GithubRepoNameExists', message: 'Github: Repository name already exists on this account'},
    'GithubWebhookExists': {status: 500, name: 'GithubWebhookExists', message: 'Github: Webhook already exists'},
    'GithubSourceRepoNotFound': {status: 500, name: 'GithubSourceRepoNotFound', message: 'Github: Source repository not found'},
    'TaskDefinitionNotFound': {status: 500, name: 'TaskDefinitionNotFound', message: 'Task definition not found'},
    'NotGoogleDocsDeployment': {status: 500, name: 'NotGoogleDocsDeployment', message: 'Project is not google docs container project'},

    'ProjectSubscriptionHasEnded': {status: 500, name: 'ProjectSubscriptionHasEnded', message: 'Project subscription has ended' },
    'ProjectNotAllConnectionsWereDeleted': {status: 207, name: 'ProjectNotAllConnectionsWereDeleted', message: 'Not all project connected services were deleted' },
    'ProjectMissingStackbitYml': {status: 500, name: 'ProjectMissingStackbitYml', message: 'stackbit.yml not found in the project\'s repo.'},
    'PaginationExceedsTotalRecords': {status: 500, name: 'PaginationExceedsTotalRecords', message: 'requested page exceeds total record\'s found.'},
    'ThemeValidationFailed': {status: 500, name: 'ThemeValidationFailed', message: 'An error occurred while validating the theme.'},
    'ThemeSourceNotFound': {status: 500, name: 'ThemeSourceNotFound', message: 'There is no source repo of the theme'},

    'FailedToPushRepo': {status: 500, name: 'FailedToPushRepo', message: 'Failed to push project to repository.'},

    'NameNotProvided': { status: 500, name: 'NameNotProvided', message: 'Name not provided' },
    'NameIsOccupied': { status: 500, name: 'NameIsOccupied', message: 'Name is occupied' },
    'NameIsWrong': { status: 500, name: 'NameIsWrong', message: 'Name is in wrong format' },
    'NotContainerProject': { status: 500, name: 'NotContainerProject', message: 'Not container project' },
    'ContainerProjectAlreadyExists': { status: 500, name: 'ContainerProjectAlreadyExists', message: 'A project already exists with the provided container name' },

    'CollaboratorTokenNotProvided': { status: 403, name: 'CollaboratorTokenNotProvided', message: 'Token was not provided' },
    'CollaboratorTokenInvalid': { status: 403, name: 'CollaboratorTokenInvalid', message: 'Invalid token' },
    'CollaboratorAlreadyAddedToProject': { status: 500, name: 'CollaboratorAlreadyAddedToProject', message: 'This user is already added as a collaborator on this project' },
    'CollaboratorIsOwner': { status: 500, name: 'CollaboratorIsOwner', message: 'You are already the owner of this project' },
    'CollaboratorInvitedCollaboratorNotFound': { status: 500, name: 'CollaboratorInvitedCollaboratorNotFound', message: 'User was not found as invited collaborator on this project' },
    'InvalidCollaboratorEmail': ({ email }) => ({ status: 422, name: 'InvalidCollaboratorEmail', message: `Email ${email} is not valid` }),
    'AlreadyCollaborator': { status: 500, name: 'AlreadyCollaborator', message: 'You are already a collaborator of this project' },
    'UserEmailValidationExpired': { status: 403, name: 'UserEmailValidationExpired', message: 'User email validation token expired'},
    'UserEmailAlreadyVerified': { status: 403, name: 'UserEmailAlreadyVerified', message: 'User email already verified'},
    'UserDoesNotOwnProject': { status: 403, name: 'UserDoesNotOwnProject', message: 'User is not the owner of this project'},
    'UserIsNotCollaborator': { status: 403, name: 'UserIsNotCollaborator', message: 'User is not the owner or collaborator of this project'},
    'ErrorAddingCollaborator': { status: 500, name: 'ErrorAddingCollaborator', message: 'Failed to add collaborator to project'},
    'CollaboratorDoesNotExist': { status: 500, name: 'CollaboratorDoesNotExist', message: 'Failed to remove collaborator from project. The collaborator does not exist on this project.'},
    'CmsAccessCheckNotSupported': { status: 500, name: 'CmsAccessCheckNotSupported', message: 'We are unable to check access for this cms type.'},
    'UserDoesNotHaveAccessToCms': { status: 500, name: 'UserDoesNotHaveAccessToCms', message: 'We were unable to access this CMS using this users access credentials.'},
    'UserDoesNotHaveConnectionToCms': { status: 500, name: 'UserDoesNotHaveConnectionToCms', message: 'User does not have a connection to this CMS.'},
    'ProjectTierExceeded': { status: 402, name: 'ProjectTierExceeded', message: 'The tier associated with the project does not allow this operation.'},
    'NoChangesToPublish': { status: 422, name: 'NoChangesToPublish', message: 'No changes to publish'},
    'SplitTestNotFound': { status: 500, name: 'SplitTestNotFound', message: 'Split test not found.'},
    'SplitTestVariantNotFound': { status: 500, name: 'SplitTestVariantNotFound', message: 'Split test variant not found.'},
    'FailedToRemoveConnection': { status: 500, name: 'FailedToRemoveConnection', message: 'failed to remove connection, connection has not been removed.'},
    'UnsupportedOperation': { status: 500, name: 'UnsupportedOperation', message: 'Unsupported Operation'},
    'LogsNotAvailable': { status: 500, name: 'LogsNotAvailable', message: 'logs not available'},
    'SurveyAlreadyCompleted': { status: 409, name: 'SurveyAlreadyCompleted', message: 'This user has already completed this survey and we cant overwrite it'},
    'SurveyNameRequired': { status: 400, name: 'SurveyNameRequired', message: 'Survey name is required'},
    'StackbitYamlNotFound': { status: 404, name: 'StackbitYamlNotFound', message: 'stackbit.yaml or stackbit.yml file not found in Github repo'},
    'NotEligibleForTrial': { status: 403, name: 'NotEligibleForTrial', message: 'Project is not eligible for specified trial.' },
    // https://developers.digitalocean.com/documentation/v2/#statuses
    'DigitalOceanInternalServerError': { status: 500, name: 'DigitalOceanInternalServerError', message: 'DigitalOcean is not available right now'},
    'DigitalOceanAppConfigurationError': { status: 400, name: 'DigitalOceanAppConfigurationError', message: 'Wrong site configuration for DigitalOcean'},
    // https://developers.digitalocean.com/documentation/v2/#rate-limit
    'DigitalOceanRateLimitError': { status: 429, name: 'DigitalOceanRateLimitError', message: 'DigitalOcean API Rate limit error. Please try again later.'},
    'InvalidProjectToken': { status: 400, name: 'InvalidProjectToken', message: 'Failed to create project, invalid project token.'},
    'InvalidProjectId': { status: 400, name: 'InvalidProjectId', message: 'Failed to create project, project ID cannot be set by client.'},
    'ContentfulValidationError': { status: 422, name: 'ContentfulValidationError', message: 'Contentful validation error. Please, make all entries valid before publishing.'},
    'PublishError': { status: 500, name: 'PublishError', message: 'Publishing error. Please, contact support.'},
    'InvalidEmailAddress': { status: 400, name: 'InvalidEmailAddress', message: 'Email is not valid.' },
    'InvalidRole': { status: 400, name: 'InvalidRole', message: 'Role is not valid.' },
    'OrganizationAcceptInviteWithDifferentEmailAddress': { status: 400, name: 'OrganizationAcceptInviteWithDifferentEmailAddress', message: 'To accept the invite you must register with the invited email address.' },
    'OrganizationRoleAlreadyExists': {
        status: 400,
        name: 'OrganizationRoleAlreadyExists',
        message: 'You already have a role in this organization.'
    },
    'OrganizationHasNonDraftProjects': {
        status: 400,
        name: 'OrganizationHasNonDraftProjects',
        message: 'Organization have a project in non draft status.'
    },
    'InvalidInput': { status: 422, name: 'InvalidInput', message: 'Invalid input' }
};

module.exports = ResponseErrors;
