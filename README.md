
![Logo](https://i.imgur.com/ZXtVTw8.png)

# Sustain.life Personal Calculator API ReactJS Quickstart

This Quickstart is a guide on how to interact with our API from a ReactJS frontend.


## Features

- Calculates carbon emissions based on different factors.

## Installation


```bash
  cd sustain
  npm install 
  npm start
```
Opens a server on localhost 3000 by default
    
## Documentation

**[Documentation](https://developer.sustain.life/api-details#api=sustain-life-personal-calculator-api&operation=get-v1-personal-calculator-defaults):**
Must be signed into the developer portal to access.

## Screenshots

#### Home screen

![App Screenshot](https://i.imgur.com/rl3cufo.png)

#### Emission field expanded

![App Screenshot](https://i.imgur.com/WRLvA2M.png)

#### After emission is submitted

![App Screenshot](https://i.imgur.com/zuJi2B3.png)


##  Errors & Fix

### 401 

#### Error:
 * "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription."

#### Fix:
  * Make sure to include our API key in the header of your requests. Found in the developer portal.
  ```
     { headers: {
      'Ocp-Apim-Subscription-Key': "********"
    }}
  ```

## Author

- [@ngowran](https://github.com/ngowran)

