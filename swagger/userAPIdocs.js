/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - firebaseId
 *              - fullName
 *              - userName
 *              - email
 *              - phoneNumber
 *              - password
 *          properties:
 *           firebaseId:
 *            type: string
 *            description: firebase id generated by firebase.
 *           fullName:
 *            type: string
 *            description: official name of the user
 *           userName: 
 *            type: string
 *            description: username for the userfeed
 *           email:
 *            type: string
 *           password: 
 *            type: string
 *            description: strong password
 *           phoneNumber:
 *            type: integer
 *            description: 10 digit number
 *           instaId: 
 *            type: string
 *           profileImage:
 *            type: string
 *            description: image url
 *           linkedIn: 
 *            type: string
 *            description: user linkedIn profile url
 *           github:
 *            type: string      
 *          example:
 *           firebaseId: 7ds98f79sd87f98sd7
 *           fullName: Narendra Uchiha
 *           userName: Hinata
 *           email: gokuchauhan@yadav.com
 *           phoneNumer: 8765432130
 *           instaId: __puneetke_Deewane
 *           linkedIn: https://www.linkedin.com/in/sdlkjfsl;djfklsdj/
 *           github: https://github.com/heavycoder
 *          
*
*/


/**
 * @swagger
 * /users/{firebaseId}:
 *  get:
 *      tags: ['Users']
 *      summary: Returns the user with given firebaseId
 *      parameters:
 *          - in: path
 *            name: firebaseId
 *            schema:
 *              type: string
 *            required: true
 *      responses:
 *          '200':    
 *              description: A single user
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '404':
 *              description: user does not exist
*/


/**
 * @swagger
 * /users/search/{key}:
 *  get:
 *      tags: ['Users']
 *      summary: Returns users with given username in key
 *      parameters:
 *          - in: path
 *            name: key
 *            schema:
 *              type: string
 *            required: true
 *      responses:
 *          '200':    
 *              description: A single user
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '404':
 *              description: user does not exist
*/


/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      tags: ['Users']
 *      summary: delete a user 
 *      parameters: 
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: string id of user to delete
 *      responses:
 *          '202':    
 *              description: user was deleted 
 *          '500':
 *              description: something went wrong!
*/

/**
 * @swagger
 * /users:
 *  get:
 *      tags: ['Users']
 *      summary: Returns the list of all users
 *      responses:
 *          '200':    
 *              description: list of all users
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
*/


/**
 * @swagger
 * /users:
 *  post:
 *      tags: ['Users']
 *      summary: creates a new user
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firebaseId:
 *                              type: string
 *                              description: firebase id generated by firebase.
 *                              required: true    
 *                          fullName:
 *                              type: string
 *                              description: official name of the user
 *                          userName: 
 *                              type: string
 *                              description: username for the userfeed
 *                          email:
 *                              type: string
 *                          password: 
 *                              type: string
 *                              description: strong password
 *                          phoneNumber:
 *                              type: integer
 *                              description: 10 digit number
 *                          instaId: 
 *                              type: string
 *                          profileImage:
 *                              type: string
 *                              description: image url
 *                          linkedIn: 
 *                              type: string
 *                              description: user linkedIn profile url
 *                          github:
 *                              type: string
 *                      example:
 *                          firebaseId: 7ds98f79sd87f98sd7
 *                          fullName: Narendra Uchiha
 *                          userName: Hinata
 *                          email: gokuchauhan@yadav.com
 *                          password: string
 *                          profileImage: https://imgflip.com/s/meme/Depression-Dog.jpg
 *                          phoneNumer: 8765432130
 *                          instaId: __puneetke_Deewane
 *                          linkedIn: https://www.linkedin.com/in/sdlkjfsl;djfklsdj/
 *                          github: https://github.com/heavycoder    
 *      responses:
 *          '201':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '500':
 *              description: could not fetch data!
 *      
*/

/**
 * @swagger
 * /users/{id}:
 *  patch:
 *      tags: ['Users']
 *      summary: update a user 
 *      parameters: 
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example: 
 *                          firebaseId: 7ds98f79sd87f98sd7
 *                          fullName: Narendra Uchiha
 *                          userName: Hinata
 *                          email: gokuchauhan@yadav.com
 *                          phoneNumer: 8765432130
 *                          instaId: __puneetke_Deewane
 *                          linkedIn: https://www.linkedin.com/in/sdlkjfsl;djfklsdj/
 *                          github: https://github.com/heavycode
 *                          
 *      responses:
 *          '202':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '500':
 *              description: could not fetch data!
 *          '404':
 *              description: user not found!
*/
